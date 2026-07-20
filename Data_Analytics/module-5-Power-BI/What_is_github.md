# What is a URL?
1. URL stands for Uniform Resource Locator.
2. A URL is the address used to locate resources on the web (websites, pages, files).
3. A URL can open a website or specific webpage in a web browser.

# Types of URLs
There are two common types of URLs:

1. Absolute URL
	- An absolute URL contains the full path including the scheme (http/https), domain, and optionally path/query/fragment.
	- Example:

	  ```
	  https://www.tops-int.com/
	  ```

2. Relative URL
	- A relative URL is relative to the current document or domain and does not include the scheme and domain.
	- Example (relative to https://example.com/docs/):

	  ```
	  ../images/logo.png
	  /about/team.html
	  ```

# What is GitHub?
GitHub is a web-based platform for hosting Git repositories, collaboration, version control, issue tracking, and code review. It lets individuals and teams store code, track changes, and work together.

# GitHub setup and basic workflow (concise)
1. Create a GitHub account: https://github.com/
2. Install Git:

	- Windows/macOS/Linux: https://git-scm.com/downloads

3. Configure Git locally:

	```bash
	git config --global user.name "Your Name"
	git config --global user.email "you@example.com"
	```

4. Generate SSH key (optional, recommended):

	```bash
	ssh-keygen -t ed25519 -C "you@example.com"
	# then add ~/.ssh/id_ed25519.pub content to GitHub > Settings > SSH and GPG keys
	```

5. Create a repository on GitHub (via web) or via CLI:

	```bash
	gh repo create my-repo --public   # using GitHub CLI (optional)
	```

6. Clone the repo locally:

	```bash
	git clone git@github.com:your-username/my-repo.git
	cd my-repo
	```

7. Add files, commit, and push:

	```bash
	echo "# My Project" > README.md
	git add README.md
	git commit -m "Add README"
	git push origin main
	```

8. Common collaborative workflow:
	- Create a branch: git checkout -b feature
	- Make changes, commit locally
	- Push branch: git push -u origin feature
	- Open a Pull Request on GitHub, request review, merge when approved

9. Useful links:
	- Git documentation: https://git-scm.com/doc
	- GitHub docs: https://docs.github.com/

``` 
