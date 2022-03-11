# sh

[![GoDoc](https://godoc.org/mvdan.cc/sh?status.svg)](https://godoc.org/mvdan.cc/sh)
[![Build](https://travis-ci.org/mvdan/sh.svg?branch=master)](https://travis-ci.org/mvdan/sh)

A shell parser, formatter and interpreter. Supports [POSIX Shell], [Bash] and
[mksh]. Requires Go 1.10 or later.

**Note**: `v2` is in a feature freeze, and will only receive bugfixes.
Development continues on the `mvdan.cc/sh/v3` Go module on the
[`master.v3`](https://github.com/mvdan/sh/tree/master.v3) branch.

### Quick start

To parse shell scripts, inspect them, and print them out, see the [syntax
examples](https://godoc.org/mvdan.cc/sh/syntax#pkg-examples).

For high-level operations like performing shell expansions on strings, see the
[shell examples](https://godoc.org/mvdan.cc/sh/shell#pkg-examples).

### shfmt

	go get -u mvdan.cc/sh/cmd/shfmt

`shfmt` formats shell programs. It can use tabs or any number of spaces to
indent. See [canonical.sh](syntax/canonical.sh) for a quick look at its default
style.

You can feed it standard input, any number of files or any number of directories
to recurse into. When recursing, it will operate on `.sh` and `.bash` files and
ignore files starting with a period. It will also operate on files with no
extension and a shell shebang.

	shfmt -l -w script.sh

Typically, CI builds should use the command below, to error if any shell scripts
in a project don't adhere to the format:

	shfmt -d .

Use `-i N` to indent with a number of spaces instead of tabs. There are other
formatting options - see `shfmt -h`. For example, to get the formatting
appropriate for [Google's Style][google-style] guide, use `shfmt -i 2 -ci`.

Packages are available on [Arch], [CRUX], [Docker], [FreeBSD], [Homebrew],
[NixOS], [Scoop], [Snapcraft], and [Void].

#### Replacing `bash -n`

`bash -n` can be useful to check for syntax errors in shell scripts. However,
`shfmt >/dev/null` can do a better job as it checks for invalid UTF-8 and does
all parsing statically, including checking POSIX Shell validity:

```sh
$ echo '${foo:1 2}' | bash -n
$ echo '${foo:1 2}' | shfmt
1:9: not a valid arithmetic operator: 2
$ echo 'foo=(1 2)' | bash --posix -n
$ echo 'foo=(1 2)' | shfmt -p
1:5: arrays are a bash feature
```

### gosh

	go get -u mvdan.cc/sh/cmd/gosh

Experimental shell that uses `interp`. Work in progress, so don't expect
stability just yet.

### Fuzzing

This project makes use of [go-fuzz] to find crashes and hangs in both the parser
and the printer. To get started, run:

	git checkout fuzz
	./fuzz

### Caveats

* When indexing Bash associative arrays, always use quotes. The static parser
  will otherwise have to assume that the index is an arithmetic expression.

```sh
$ echo '${array[spaced string]}' | shfmt
1:16: not a valid arithmetic operator: string
$ echo '${array[dash-string]}' | shfmt
${array[dash - string]}
```

* `$((` and `((` ambiguity is not supported. Backtracking would complicate the
  parser and make streaming support via `io.Reader` impossible. The POSIX spec
  recommends to [space the operands][posix-ambiguity] if `$( (` is meant.

```sh
$ echo '$((foo); (bar))' | shfmt
1:1: reached ) without matching $(( with ))
```

* Some builtins like `export` and `let` are parsed as keywords. This is to allow
  statically parsing them and building their syntax tree, as opposed to just
  keeping the arguments as a slice of arguments.

### JavaScript

A subset of the Go packages are available as an npm package called [mvdan-sh].
See the [_js](_js) directory for more information.

### Docker

To build a Docker image, checkout a specific version of the repository and run:

	docker build -t my:tag -f cmd/shfmt/Dockerfile .

### Related projects

* Alternative docker images - by [jamesmstone][dockerized-jamesmstone], [PeterDaveHello][dockerized-peterdavehello]
* [format-shell] - Atom plugin for `shfmt`
* [micro] - Editor with a built-in plugin for `shfmt`
* [shell-format] - VS Code plugin for `shfmt`
* [vim-shfmt] - Vim plugin for `shfmt`

[arch]: https://www.archlinux.org/packages/community/x86_64/shfmt/
[bash]: https://www.gnu.org/software/bash/
[crux]: https://github.com/6c37/crux-ports-git/tree/HEAD/shfmt
[docker]: https://hub.docker.com/r/mvdan/shfmt/
[dockerized-jamesmstone]: https://hub.docker.com/r/jamesmstone/shfmt/
[dockerized-peterdavehello]: https://github.com/PeterDaveHello/dockerized-shfmt/
[examples]: https://godoc.org/mvdan.cc/sh/syntax#pkg-examples
[format-shell]: https://atom.io/packages/format-shell
[freebsd]: https://github.com/freebsd/freebsd-ports/tree/HEAD/devel/shfmt
[go-fuzz]: https://github.com/dvyukov/go-fuzz
[google-style]: https://google.github.io/styleguide/shell.xml
[homebrew]: https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/shfmt.rb
[micro]: https://micro-editor.github.io/
[mksh]: https://www.mirbsd.org/mksh.htm
[mvdan-sh]: https://www.npmjs.com/package/mvdan-sh
[nixos]: https://github.com/NixOS/nixpkgs/blob/HEAD/pkgs/tools/text/shfmt/default.nix
[posix shell]: http://pubs.opengroup.org/onlinepubs/9699919799/utilities/V3_chap02.html
[posix-ambiguity]: http://pubs.opengroup.org/onlinepubs/9699919799/utilities/V3_chap02.html#tag_18_06_03
[shell-format]: https://marketplace.visualstudio.com/items?itemName=foxundermoon.shell-format
[scoop]: https://github.com/lukesampson/scoop/blob/HEAD/bucket/shfmt.json
[snapcraft]: https://snapcraft.io/shfmt
[vim-shfmt]: https://github.com/z0mbix/vim-shfmt
[void]: https://github.com/voidlinux/void-packages/blob/HEAD/srcpkgs/shfmt/template