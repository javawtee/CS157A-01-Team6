## Update (edit and push to Git) documentations
****Don't update simultaneously with other contributors, it must be repeated one-by-one contributor with following steps** <br/><br/>
Requirements:
1. Be a contributor to the project
2. Can be done with [Git CLI/Bash](https://gitforwindows.org/) or [Github Desktop](https://desktop.github.com/)

Steps: 
1. Merge master into your current branch (keep your document up-to-date)
2. Open and edit your document locally <br/>
*(Before editing, double-check to make sure your document is at the state where other contributors left off)*
3. After finish editing, push to your branch:
```
cd <document_location>
git add <document_name>
git commit -m "Updated document at part X"
git push origin <branch_name>
```
4. Go to Git website to pull request and merge into master branch<br/>
