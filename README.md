# Augmenting Final

# Git Instructions

## Notes

Anything that is surrounded by <> is meant to be replace with your own writing, the <> should be **omited**

**EX:** 

``git clone https://github.com/<owners-username>/<project-name>.git``

should end up looking something like:

``git clone https://github.com/harrydnewman/augmenting-final.git``

## Instructions

### New project

To create a new github project, open your terminal and run:

``git init``

I would suggest setting up your coding project **before** initializing github


**.gitignore**

Locate the .gitignore file in your directory, open it, and ensure it includes the following entries:

``node_modules
.DS_Store``

**Note:** If you don't see a .gitignore file, simply create a new file, name it .gitignore and add the above to the file.

**README.md**

Then create a file named **README.md**

open the file and type:

``# <Project Name>``

Then save.

### Setting up a new project on github.com

Initializing the project will create a *local repository* (also called repo), to connect the repo to github.com to allow you and your partner to collaborate, follow these steps.

navigate to github.com, log into your account and visit your repositories page. 

Create a new repository with the following settings:

``Name: <project-name>``

``Description: whatever you want, totally optional``

``Visibility: public (just to make your life easier)``

``Add a README file: NO (DO NOT CHECK THE BOX)``

``Add .gitignore: NO (.gitignore template: None)``

``License: None``

**Note:** 
These settings change based on what types of projects/coding languages you're working with. However, when working with Vite the .gitignore file is already created for you, which is why we leave these fields blank.

If you've followed these steps correctly, you should see a page that says: **Quick setup — if you’ve done this kind of thing before**

### Adding a remote

**A GitHub remote is a link to a repository hosted on GitHub, allowing you to push and pull code changes between your local and remote repositories.**

After setting up your project on github, reopen your terminal and type:

``git remote add origin https://github.com/<your-username>/<your-repository-name>.git``

To double check that the remote has been set up properly type:

``git remote -v``

If **NOTHING** prints, the remote has **NOT** been set up correctly

expected output should look something like this:

``origin  https://github.com/harrydnewman/augmenting-final.git (fetch)``

``origin  https://github.com/harrydnewman/augmenting-final.git (push)``

**Pushing local repo to remote**

``git checkout -b main``
*creates the main branch*

``git add .``

``git commit -b "initial commit"``

``git push origin main``

This may take a second, once it's complete, reload your repository on github.com and you should see a copy of your code on the site.

### Collaborating

**Note:** in this section the *owner* is the person who originally set up the repository, it is registered under their account on github.

**THE PROJECT MUST BE PUSHED TO THE REMOTE FOR THIS TO WORK**

**To collaborate:**

The owner should navigate to the repository on github.com, go to settings, collaborator, and invite the person you want to work with. 

Once the person accepts this invite, they should create a new **EMPTY** folder on their machine and run the following.

``git clone https://github.com/<owners-username>/<project-name>.git``

If this is successful, then run:

``cd <project-name>``

``npm install``

``npm run dev``

If the website says that its running on local host, you have cloned successfully!

To push/pull changes from you or your collaborators, continue reading the guide.

### Pulling (Keeping your repo up to date)

**Before making any changes, first run:**

``git pull origin main``

Pulling ensures you’re working with the latest code and reduces the risk of conflicts later when merging.

### Branching
Each new feature or change should be done in its **own branch**. To create a new branch and switch to it:

``git checkout -b <branch-name>``

Branches are usually named after the feature, bug, or task (e.g., feature-login, bugfix-button).

You must commit all changes before switching between branches!

**Tip:**
If you want to see all your branches, run:

``git branch``

**I would suggest only using the main branch for code that is complete and RUNS PROPERLY, otherwise always work in a different branch to ensure you always have a version that works to go back to**

### Committing 
Committing is one of the most important features in GitHub. Commits allow you to back up your code, enabling you to return to a previous version later.

**To Commit:**

Make your changes and stage them with:

``git add .``

Then, commit the changes with a message:

``git commit -m "Description of changes"``

### Pushing

Pushing your changes to the **Remote** allows your commits to be backed up online. This will also allow your teammate to see your changes.

**I suggest pushing each time you commit, but at the very least it should be done when you are done with your work for the day.**

**To Push:**

First **commit** then:

``git push origin <branch-name>``

### Pull Requests (PR)

A pull request is a way to propose merging your changes into another branch so others can review and approve them before they become part of the main project.

**To Pull:**

On github.com, navigate to your repository, and you'll see an option to create a *Pull Request* for your branch.

(If you dont see this, **RELOAD**)

PRs let you and your teammate review the code changes before merging them into the main branch.

The other person can comment on, review, or even add commits to your branch if changes are needed.

### Merging

Once the Pull Request is reviewed and approved, you can merge it into the main branch on GitHub:

If working on GitHub, click the Merge button on the PR page.

**MAKE SURE TO INFORM YOUR TEAMMATES EACH TIME YOU MERGE, YOU ALL MUST CREATE A PULL REQUEST**

**Note:** Make sure to pull the latest changes after merging to keep your local branch up to date.

``git pull origin <branch>``

**Forcing a merge**

Sometimes when attempting a merge on github.com for one reason or another it wont allow you to merge two branches.

This is when you might want to **force** a branch merge. This approach is often used to make one branch identical to another. 

Suppose you want your branch **feature-branch** to replace the **main** branch.

To force a branch merge, follow these steps carefully, as this can potentially overwrite changes on the target branch. Only do this if you’re confident no crucial data will be lost. 
This approach is to forcefully merge the changes from one branch into another locally, resolving conflicts by preferring one branch over the other.

**Checkout the target branch:**

``git checkout main``

**Back up main branch incase everything goes wrong**

``git checkout -b <branch-backup-name>``

*this will switch you to the backup branch*

***BACK UP MAIN BRANCH TO GITHUB BEFORE CONTINUING***

``git push origin <branch-backup-name>``

**Switch back to main branch to continue the merge:**

``git checkout main``

**Force merge the branch (in our case: *feature-branch*) into main, ignoring conflicts:**

``git merge -X theirs feature-branch``

The ``-X theirs`` strategy merges the branches, keeping non-conflicting changes, but resolves conflicts by favoring feature-branch.

This is going to open a weird menu, to keep going hit the ``esc`` key and type:

``:wq`` and press ``enter`` to save the commit message.

To exit out of this menu **without saving**, press the ``esc`` key and type ``:q!`` and then press ``enter``

**Push the merged changes to the remote:**

``git push origin main``

**If pushing to the remote fails:**

``git push origin main --force``

**Warnings**
Force pushes and reset operations **override** remote history, affecting anyone else pulling from the repository.

Always communicate with your team before forcing a merge to avoid confusion or data loss.

**Once youve merged a branch successfully and everything is running as expected, feel free to delete the old branch to keep your working space clean and organized**





bruh bruh bruh briuh bruhhh