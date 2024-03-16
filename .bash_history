exit
git config --global user.name "Brad"
git config --global user.email bradramnarinesingh@gmail.com
git config --list
cd/home/dh_c3czax/iad1-shared-e1-13.dreamhost.com
cd /home/dh_c3czax/brad1.dev
git init
git.add .
git add .
git status
git config --list
git add .
git init
git add .
rm -rf /home/dh_c3czax/.git/
cd brad1.dev
git init
git add .
git commit -m "Initial commit"  # or another message that describes your update
git push origin main
git branch
git push origin master
git commit -m "Committing website files for the first time"
git log --oneline
git branch -a
git checkout master
git branch -m main
git symbolic-ref HEAD refs/heads/main
git remote
git remote -v
git config --global init.defaultBranch main
git remote add origin https://github.com/Bradramnarinesingh/Portfolio-Website.git
git push -u origin main
git remote add origin git@github.com:Bradramnarinesingh/Portfolio-Website.git
git remote set-url origin git@github.com:Bradramnarinesingh/Portfolio-Website.git
git push -u origin main
fatal: remote origin already exists.
dh_c3czax@iad1-shared-e1-13:~/brad1.dev$ git remote set-url origin git@github.com:Bradramnarinesingh/Portfolio-Website.git
dh_c3czax@iad1-shared-e1-13:~/brad1.dev$ git push -u origin main
The authenticity of host 'github.com (140.82.112.4)' can't be established.
ECDSA key fingerprint is SHA256:p2QAMXNIC1TJYWeIOttrVc98/R1BUFWu3/LiyKgUfQM.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
yes


git push -u origin main

git remote set-url origin git@github.com:Bradramnarinesingh/Portfolio-Website.git

cat ~/.ssh/authorized_keys
cd ~
mkdir brad1.dev.git
cd ~/brad1.dev.git
git symbolic-ref HEAD refs/heads/main
git init --bare
git symbolic-ref HEAD refs/heads/main
ls -la
refs/heads/main
cat HEAD
git config --global user.name "Brad Ramnarinesingh"
git config --global user.email bradramnarinesingh@gmail.com
git --version
git config --global init.defaultBranch main
git init
git add .
git commit -m "First Commit"
git remote add dreamhost ssh://dh_c3czax@iad1-shared-e1-13.dreamhost.com/~/brad1.dev.git
git remote show
git push -u dreamhost main
dh_c3czax@iad1-shared-e1-13:~/brad1.dev.git$ cat HEAD
ref: refs/heads/main
dh_c3czax@iad1-shared-e1-13:~/brad1.dev.git$ git config --global user.name "Brad Ramnarinesingh"
dh_c3czax@iad1-shared-e1-13:~/brad1.dev.git$ git config --global user.email bradramnarinesingh@gmail.com
dh_c3czax@iad1-shared-e1-13:~/brad1.dev.git$ git --version
git version 2.25.1
dh_c3czax@iad1-shared-e1-13:~/brad1.dev.git$ git config --global init.defaultBranch main
dh_c3czax@iad1-shared-e1-13:~/brad1.dev.git$ git init
Initialized empty Git repository in /home/dh_c3czax/brad1.dev.git/.git/
dh_c3czax@iad1-shared-e1-13:~/brad1.dev.git$ git add .
dh_c3czax@iad1-shared-e1-13:~/brad1.dev.git$ git commit -m "First Commit"
[master (root-commit) c19fc80] First Commit
 16 files changed, 660 insertions(+)
 create mode 100644 HEAD
 create mode 100644 config
 create mode 100644 description
 create mode 100755 hooks/applypatch-msg.sample
 create mode 100755 hooks/commit-msg.sample
 create mode 100755 hooks/fsmonitor-watchman.sample
 create mode 100755 hooks/post-update.sample
 create mode 100755 hooks/pre-applypatch.sample
 create mode 100755 hooks/pre-commit.sample
 create mode 100755 hooks/pre-merge-commit.sample
 create mode 100755 hooks/pre-push.sample
 create mode 100755 hooks/pre-rebase.sample
 create mode 100755 hooks/pre-receive.sample
 create mode 100755 hooks/prepare-commit-msg.sample
 create mode 100755 hooks/update.sample
 create mode 100644 info/exclude
dh_c3czax@iad1-shared-e1-13:~/brad1.dev.git$ git remote add dreamhost ssh://dh_c3czax@iad1-shared-e1-13.dreamhost.com/~/brad1.dev.git
dh_c3czax@iad1-shared-e1-13:~/brad1.dev.git$ git remote show
dreamhost
dh_c3czax@iad1-shared-e1-13:~/brad1.dev.git$ git push -u dreamhost main
error: src refspec main does not match any
error: failed to push some refs to 'ssh://dh_c3czax@iad1-shared-e1-13.dreamhost.com/~/brad1.dev.git'
dh_c3czax@iad1-shared-e1-13:~/brad1.dev.git$
git remote show
git remote -v
git push -u dreamhost main
git remote add dreamhost ssh://dh_c3czax@iad1-shared-e1-13.dreamhost.com/~/brad1.dev.git
git push -u dreamhost main
git remote -v
git push -u dreamhost main
git checkout -b main  # Create and switch to a new branch named 'main'
git push -u dreamhost main  # Push the 'main' branch to the remote repository
git push -u dreamhost HEAD:main
git push -u dreamhost main
git status
mkdir ~/cloned-brad1.dev.git
cd ~/cloned-brad1.dev.git
git clone ~/brad1.dev..git ~/cloned-brad1.dev.git
git clone ~/brad1.dev.git ~/cloned-brad1.dev.git
is -la
ls -la
git branch
git push -u dreamhost main
# If 'main' branch exists, switch to it
git checkout main
# If 'main' branch doesn't exist, create and switch to it
git checkout -b main
# If 'main' branch exists, switch to it
git checkout main
# If 'main' branch doesn't exist, create and switch to it
git checkout -b main
git push -u dreamhost main
t$ git add .
git add .
git commit -m "Description of the changes made"
git push dreamhost main
cd ~/example.com
cd ~/brad1.dev
git add.
git add ,
git add .
git status
git init
git add .
git status
cd /home/dh_c3czax/brad1.dev
git init
git add .
git status
git commit -m "Updated website files"
git push dreamhost master
git status
git status
git status
git commit -am "Your commit message"
git push dreamhost main
git checkout -b master
git push dreamhost master
git remote add dreamhost ssh://user@server.dreamhost.com/path/to/repository.git
cat ~/Documents/dreamhost-git-key.pub | ssh dh_c3czax@iad1-shared-e1-13.dreamhost.com "mkdir ~/.ssh; cat >> ~/.ssh/authorized_keys"
git remote -v
git --version
git pull origin master
git config --global init.defaultBranch main
git branch -a
cd /home/dh_c3czax/brad1.dev
git config --list
git add .
git status
cat ~/.ssh/authorized_keyscat
cat "C:\Users\brad5\OneDrive\School\dreamhost-git-key.pub" | ssh dh_c3czax@iad1-shared-e1-13.dreamhost.com "mkdir -p ~/.ssh; cat >> ~/.ssh/authorized_keys"
cat ~/.ssh/authorized_keys
git push -u origin master
cd /home/dh_c3czax/brad1.dev
git push -u origin master
git remote -v
git push dreamhost master
cat "C:\Users\brad5\Documents\dreamhost-git-key.pub" | ssh dh_c3czax@iad1-shared-e1-13.dreamhost.com "mkdir -p ~/.ssh; cat >> ~/.ssh/authorized_keys"
cat ~/.ssh/authorized_keys
git push dreamhost master
cd ~/brad1.dev.git
nano hooks/post-receive
chmod +x hooks/post-receive
git add .
git commit -m "Test"
git push origin main
git remote -v
git remote show origin
git remote set-url origin <new URL>
git push dreamhost main
bragit push dreamhost main
git push dreamhost main
