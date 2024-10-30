# Augmenting Final

# Git Instructions

### setting up a new project
``git init``

### setting up a new project on git

### Cloning a Repo


### adding a remote
<!-- explain the remote -->

### keeping your repo up to date
** Before making any changes, first run: **
``git pull origin main``

Pulling ensures you’re working with the latest code and reduces the risk of conflicts later when merging.

### Branching
Each new feature or change should be done in its **own branch**. To create a new branch and switch to it:

``git checkout -b <branch-name>``

Branches are usually named after the feature, bug, or task (e.g., feature-login, bugfix-button).

You must commit all changes before switching between branches!

**Tip: **
If you want to see all your branches, run:
``git branch``

### Committing 
Committing is one of the most important features in GitHub. Commits allow you to back up your code, enabling you to return to a previous version later.

**To Commit:**

Make your changes and stage them with:

``git add .``

Then, commit the changes with a message:

``git commit -m "Description of changes"``

**Pushing changes**

Pushing your changes to the **Remote** allows your commits to be backed up online. This will also allow your teammate to see your changes.
**I suggest pushing each time you commit, but at the very least it should be done when you are done with your work for the day.**

**To Commit:**

``git push origin <branch-name>``

### Pull Requests (PR)

On github.com, navigate to your repository, and you’ll see an option to create a Pull Request for your branch.

PRs let you and your teammate review the code changes before merging them into the main branch.

The other person can comment on, review, or even add commits to your branch if changes are needed.

### Merging

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
``git add .``
``git commit -m "Backup branch commit message``
``git push origin <branch-backup-name>``

**Switch back to main branch to continue the merge: **
``git checkout main``

**Force merge the branch (in our case: *feature-branch*) into main, ignoring conflicts:**
``git merge -s ours feature-branch``
The ``-s ours`` strategy tells Git to keep the target branch’s (*main*) history but overwrite its content with *feature-branch*.

**Push the merged changes to the remote:**
``git push origin main``

**If pushing to the remote fails:**
``git push origin main --force``

**Warnings**
Force pushes and reset operations **override** remote history, affecting anyone else pulling from the repository.
Always communicate with your team before forcing a merge to avoid confusion or data loss.






