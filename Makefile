hook:
	rm -f .git/hooks/pre-commit
	rm -f .git/hooks/pre-push
	echo "make prepush" > .git/hooks/pre-push
	chmod 755 .git/hooks/pre-push

ready:
	npm run lint
	npm run test

prepush:
ifeq ($(strip $(shell git status --porcelain 2>/dev/null)),)
	make ready
else
	$(error Unstaged changes on deck.)
endif