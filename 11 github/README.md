<h1> <center> Git and Github<center></h1>

## Introduction
### 1. What is git?
    A version control system, or VCS, tracks the history of changes as people and teams collaborate on projects together. As developers make changes to the project, any earlier version of the project can be recovered at any time.
    Developers can review project history to find out:

    Which changes were made?
    Who made the changes?
    When were the changes made?
    Why were changes needed?
    VCSs give each contributor a unified and consistent view of a project, surfacing work that's already in progress. Seeing a transparent history of changes, who made them, and how they contribute to the development of a project helps team members stay aligned while working independently.

    In a distributed version control system, every developer has a full copy of the project and project history. Unlike once popular centralized version control systems, DVCSs don't need a constant connection to a central repository. Git is the most popular distributed version control system. Git is commonly used for both open source and commercial software development, with significant benefits for individuals, teams and businesses.

    Git lets developers see the entire timeline of their changes, decisions, and progression of any project in one place. From the moment they access the history of a project, the developer has all the context they need to understand it and start contributing.

    Developers work in every time zone. With a DVCS like Git, collaboration can happen any time while maintaining source code integrity. Using branches, developers can safely propose changes to production code.

    Businesses using Git can break down communication barriers between teams and keep them focused on doing their best work. Plus, Git makes it possible to align experts across a business to collaborate on major projects.

### 2. How GitHub works?
    GitHub hosts Git repositories and provides developers with tools to ship better code through command line features, issues (threaded discussions), pull requests, code review, or the use of a collection of free and for-purchase apps in the GitHub Marketplace. With collaboration layers like the GitHub flow, a community of 100 million developers, and an ecosystem with hundreds of integrations, GitHub changes the way software is built.

    GitHub builds collaboration directly into the development process. Work is organized into repositories where developers can outline requirements or direction and set expectations for team members. Then, using the GitHub flow, developers simply create a branch to work on updates, commit changes to save them, open a pull request to propose and discuss changes, and merge pull requests once everyone is on the same page.

### 3. What is repository?
    A repository is the most basic element of GitHub. It's a place where you can store your code, your files, and each file's revision history. Repositories can have multiple collaborators and can be either public or private.

### 4. What is forks?
    A fork is a new repository that shares code and visibility settings with the original “upstream” repository. Forks are often used to iterate on ideas or changes before they are proposed back to the upstream repository, such as in open source projects or when a user does not have write access to the upstream repository.

### 5. How to do Forking a repository ?
 <a href=https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository>Go through the site click here</a>

### 6. What is git init ?
    The git init command creates a new Git repository. It can be used to convert an existing, unversioned project to a Git repository or initialize a new, empty repository. Most other Git commands are not available outside of an initialized repository, so this is usually the first command you'll run in a new project.
    
    command ->  git init 

### 7. What is branch and how to create a branch ?
    A branch in Git is simply a lightweight movable pointer to one of these commits. The default branch name in Git is master . As you start making commits, you're given a master branch that points to the last commit you made. Every time you commit, the master branch pointer moves forward automatically. Note

    Show the number of branch and where is you pointer.
    command ->  git branch   

    create new branch 
    command ->  git branch name_of_branch

    create new branch and checkout with existing code
    command -> git checkout -b name_of_branch



### 8. What is tags ?
    Tagging in GIT refers to creating specific points in the history of your repository/data. It is usually done to mark the release points.

    Two main purposes of tags are:
        Make Release point on your code.
        Create historic restore points.

    You can create tags when you want to create a release point for a stable version of your code. You can also create tags when you want to create a historic point for your code that you can refer to in the future to restore your data.

    Create a tag with some name.
        - git tag {tag name} 

    create a tag name with message.
        - git tag -a {tag name} -m {some message} 

    List all tag names.
        - git tag

    To see the details of the tag we can use
        -  git show {tag name} 

    To see tags starting with some letters

        - git tag -l "v2.*"

    Push tags to remote.
        - git push origin {tag name}
        - git push --tags
        
    Delete Tags. (locally)
        - git tag -d {tag name}
        - git tag --delete {tag name}

    Delete tags from remote
        - git push origin -d {tag name}
        - git push origin --delete {tag name}
        - git push origin :{tag name}




### 9. What is Checkout ?
    Git checkout command is used to switch between different branches or to the required branches which are created by using the “git branch” command. Checking out between different branches will can be useful to the restore the files of different branches.

    To switch to the different branches you can use the following command.

    command -> git checkout branch_name
    
    And also you can restore the files which required specifically to the previous version you can use the following command.

    command ->git checkout <commit-hash> <file-name>

### 10. What is remote and remote branches ?
    Remote repositories are versions of your project that are hosted on the Internet or network somewhere. You can have several of them, each of which generally is either read-only or read/write for you.

    Remote branches are how developers collaborate on the same project simultaneously. A remote branch exists in a remote repository (most commonly referred to as origin by convention) and is hosted on a platform such as GitHub

    set remote in our local
    -> git remote add {name_of_origin }  https://github.com/theabhisek/interview-questions.git
    
    to see all remote 
    -> git remote -v

    to remove origin 
    -> git remote remove {origin_name}

    fetch all branch 
    -> git fetch { origin_name }

    fetch all origins branch 
    -> git fetch --all 

    switch remote branch 
    
    ->  git checkout {origin_name}/{branch_name}

### 11. How to push code on github?

    step 1. git add .
    step 2. git commit -m 'message'
    step 3. git push {origin_name} {branch_name}

    if there is some error and see git pull command in error 
    step 4 . git pull {origin} {branch_name}
    then step 3 again.

### 12. What is clone and pull.Difference between git clone and pull?

    Cloning a repository to another location, i.e., our local machine creates an exact copy of all files at the time of the clone. Cloning also connects the local and GitHub repositories to allow further push and pull requests.

    We can do this by opening our GitHub repository and copying the given URL link. Afterward, we can open our terminal and enter the URL preceded by the "git clone <URL>" command. An example has been shown below. Moreover, we also experiment with this terminal by using our repository

    command -> git clone https://{repository}

    The pull request updates our local repository with new changes from the GitHub repository. It is a combination of git fetch and git merge. A fetch request is sent to the GitHub repository, where changes are fetched. Afterward, git merge merges the local repository with the fetched changes.

    Before creating a pull request, we must have an established connection with a GitHub repository. Then we can use the "git pull <>" command and the URL link (from the GitHub repository) to create our pull request. An example has been given below

    command -> git pull {origin_name} { branch_name}

    We can jump into their differences now that we have explored both requests.

    Git clone copies all files to the local machine, while git pull only copies the modified files to the local machine.

    Git clone creates a connection between both repositories, while git pull requires a connection to be made before it can work.

    Git clone is an individual request within itself, whereas git pull is a combination of git fetch followed by git merge.

    Git clone has no chance of a conflict, whereas git pull requests can run into conflicts while pulling files.

### 13. Authentication using various method.
    - username and password
    - token 
        add token in remote repository
        command-> git remote add {origin} https://{username}:{token}@github.com/theabhisek/interview-questions.git
    - ssh
        terminal command
         -> ssh-keygen
        copy public key and paste in github ssh section

### 14. What is staging area?
    The staging area can be described as a preview of your next commit. When you create a git commit, Git takes changes that are in the staging area and make them as a new commit. You are allowed to add and remove changes from the staging area. The staging area can be considered as a real area where git stores the changes.

    Add code in staging area{staged}
    single-> git add {file_name} 
    all -> git add .

    remove from staging area
    single -> git reset HEAD -- path/to/file

    Just like git add, you can unstage files recursively by directory and so forth, so to unstage everything at once, run this from the root directory of your repository:

        -> git reset HEAD -- .

    
### 15. Git stash
    We use git stash to store our changes when they are not ready to be committed, but we must change to a different branch.

        -> git stash save
        -> git stash

    with message
        -> git stash save "this is a message to display on the list"

    list stash
        ->  git stash list

    Apply and drop on one command:
        -> git stash pop
 
    apply a specific one from out stack

    all-> git stash apply
    single -> git stash apply stash@{3}


### 16.Roll back commits

- Undo last commit putting everything back into the staging area:
    
        git reset --soft HEAD^

- Add files and change message with:

        git commit --amend -m "New Message"


- Undo last and remove changes:

        git reset --hard HEAD^
- Same as last one but for two commits back:

        git reset --hard HEAD^^
note:  <h6><center>Reset removes the commit while revert removes the changes but leaves the commit</h6>

### 17. Git merge,cherry-pick, rebase, reset and revert ?
- GIT MERGE
        it merge-file is useful for combining separate changes to an original. Suppose <base> is the original, and both <current> and <other> are modifications of <base> , then git merge-file combines both changes. If there are conflicts, the user should edit the result and delete one of the alternatives.

        if you want any branch in master and you not in master branch so 
        
        -> git checkout master
        -> git merge {branch_name} 

        if there is conflict 


