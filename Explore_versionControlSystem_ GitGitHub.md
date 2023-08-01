# 3-1 What is a version control system, Git vs. GitHub

Version Control System (VCS):
A version control system is a software tool that allows developers to track and manage changes to their code over time. It helps teams collaborate on projects efficiently, maintain a history of changes, and revert to previous versions if needed. VCS ensures that multiple developers can work on the same codebase simultaneously without conflicts. It provides features like branching and merging, which facilitate parallel development and code collaboration.

Git:
Git is a distributed version control system that was developed by Linus Torvalds. It allows developers to track changes in their codebase, create branches for parallel development, merge branches, and collaborate with other developers easily. Git operates locally, which means that developers can work offline and commit changes to their local repository. Later, these changes can be synchronized with a remote repository hosted on services like GitHub.

GitHub:
GitHub is a web-based hosting service for Git repositories. It provides a platform for developers to host their code and collaborate with others. GitHub offers features like pull requests, issue tracking, code reviews, and more, making it a popular choice for open-source and private project management. Developers can use GitHub to push their local Git repositories to a remote repository hosted on GitHub servers, making it accessible to other team members and contributors.

## 3-2 Create a Github repository and explore GitHub

To create a GitHub repository, follow these steps:

1. Go to <https://github.com/> and sign in or create a GitHub account.
2. Once signed in, click on the "+" sign in the top-right corner and select "New repository."
3. Enter a name for your repository, add an optional description, choose whether it should be public or private, and select other repository settings as needed.
4. Click on "Create repository," and your new GitHub repository will be created.

Once you have created a repository, you can explore various features and options offered by GitHub, such as:

- Repository homepage: This is the main page of your repository, showing the code, commits, branches, and other information.
- Code tab: This is where you can browse and view the files in your repository.
- Issues tab: You can use this tab to track and manage issues or bugs related to your project.
- Pull Requests tab: This tab displays the pull requests created by contributors who want to merge changes into your repository.
- Wiki tab: You can use this tab to create and manage project documentation.
- Insights tab: This section provides statistics and graphs related to your repository's activity, such as contributors, code frequency, and more.

## 3-3 Introduction to basic commands: git init, git add, git commit

Before you can use Git with your project, you need to initialize a Git repository in the project's directory. Open your terminal or command prompt and navigate to the project folder.

1. `git init`: Initializes a new Git repository in the current directory.

Once the repository is initialized, you can start tracking changes to your project files. The typical workflow includes three main commands:

2.`git add <file>`: Stages changes in the specified file to be committed. If you want to add all changes, you can use `git add .` to stage all modified files.

3.`git commit -m "commit message"`: Commits the staged changes to the repository with a descriptive commit message explaining the changes made.

Example workflow:

```bash
# Navigate to your project directory
cd /path/to/your/project

# Initialize a new Git repository
git init

# Make changes to your files (e.g., create, modify, or delete files)

# Stage the changes you want to commit
git add file1.txt file2.txt

# Commit the changes with a descriptive message
git commit -m "Add new features and fix bugs"
```

### 3-3-2 (only for Mac users) Set GitHub account for the first time

If you are a Mac user and have never used Git with GitHub before, you need to set up your GitHub account for the first time. Follow these steps:

1. Open Terminal from Applications > Utilities > Terminal.

2. Check if Git is already installed by running the following command:

```bash
git --version
```

3. If Git is not installed, you will be prompted to install it.

4. Set your GitHub username and email address, which will be associated with your Git commits. Use the following commands, replacing "Your Username" and "<your.email@example.com>" with your GitHub account details:

```bash
git config --global user.name "Your Username"
git config --global user.email "your.email@example.com"
```

Now your GitHub account is set up, and you can use Git commands with your repositories.

## 3-4 (optional) VS Code terminal to set basic GitHub and GitHub Desktop

If you prefer using Visual Studio Code (VS Code) as your code editor, you can use its integrated terminal to execute Git commands. Additionally, you can install the GitHub Desktop application to manage your Git repositories visually.

To set up basic GitHub integration in VS Code:

1. Install Visual Studio Code: Download and install VS Code from the official website (<https://code.visualstudio.com/>).

2. Open VS Code and navigate to the Extensions sidebar (Ctrl+Shift+X or Cmd+Shift+X).

3. Search for "GitHub" and install the "GitHub Pull Requests and Issues" extension by GitHub.

4. Sign in to your GitHub account within the extension to enable GitHub-related features in VS Code.

To set up GitHub Desktop:

1. Download GitHub Desktop from the official website (<https://desktop.github.com/>) and install it on your computer.

2. Open GitHub Desktop and sign in with your GitHub account.

## 3-5 Send small incremental changes to GitHub with git push:

After you have made changes to your local Git repository and committed them, you can send those changes to your remote repository on GitHub using the `git push` command. This command syncs your local changes with the remote repository.

The basic syntax for `git push` is:

```bash
git push <remote> <branch>
```

Here, `<remote>` refers to the name of the remote repository (usually "origin" for GitHub), and `<branch>` is the name of the branch you want to push.

Example:

Suppose you have made changes and committed them to your local "main" branch, and your remote repository is on GitHub.

```bash
# Push changes from the local 'main' branch to the remote 'main' branch on GitHub
git push origin main
```

After running this command, the changes will be uploaded to your GitHub repository.

## 3-6 Common GitHub-related issues for beginners

As a beginner on GitHub, you might encounter some common issues:

1. **Merge conflicts**: When multiple developers make changes to the same file simultaneously, Git may not automatically merge them, resulting in conflicts. You'll need to manually resolve these conflicts before merging.

2. **Permission denied (publickey)**: When trying to push changes to a GitHub repository over SSH, you may encounter this issue if your SSH key is not set up correctly.

3. **404 error when cloning**: This might happen if you try to clone a non-existent repository or use the wrong URL.

4. **Authentication failure**: If you are prompted for a username and password on every push, it could be due to incorrect authentication credentials.

5. **Unrelated histories**: When trying to merge branches with unrelated histories, Git may raise an error. You

 can address this by adding `--allow-unrelated-histories` when pulling or merging.

6. **Large files or repositories**: GitHub has file size and repository size limits. If you encounter issues pushing large files, consider using Git Large File Storage (Git LFS).

7. **Accidental commits**: If you make unintended commits, you can revert them using `git reset` or `git revert`.

8. **Deleted branches**: If you accidentally delete a branch, you can often recover it by looking at the reflog and creating a new branch from the commit it pointed to.

If you encounter any of these issues, search for the specific error message on GitHub's documentation or forums to find solutions. If needed, ask for help from more experienced developers or check GitHub's support channels.

## 3-7 Module Summary and basic Git workflow

Module Summary:
In this module, you learned about version control systems, specifically Git, and its popular hosting service GitHub. You explored basic Git commands like `git init`, `git add`, `git commit`, and sending changes to GitHub with `git push`. Additionally, you set up your GitHub account for the first time and explored some common issues beginners may face on GitHub.

Basic Git Workflow:

1. Initialize a new Git repository using `git init` in your project directory.
2. Create or modify files in your project.
3. Use `git add <file>` to stage the changes you want to commit.
4. Commit the staged changes using `git commit -m "commit message"`.
5. Push your committed changes to the remote repository with `git push <remote> <branch>`.

Remember to commit small, meaningful changes frequently and use descriptive commit messages to make it easier for you and your team to understand the project's history.
