.PHONY: install build clean

install: build
	(cd _site && tar cf - .) | (cd .. && tar xf -)

build: _site
	jekyll build

_site:
	mkdir _site

clean:
	rm -rf _site
