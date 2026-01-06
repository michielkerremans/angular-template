# GitHub Workflow

## Git Dual Push
- Personal repo + teacher repo simultaneously
- Windows Credential Manager stores GitHub token
- One-time setup, then seamless pushes

### Setup Windows Credential Manager
```powershell
git config --global credential.helper wincred
git config --global --list | findstr credential  # Verify setup
```

### Configure Dual Push Remotes
```powershell
git remote set-url --add --push origin git@github.com:user/repoA.git
git remote set-url --add --push origin git@github.com:user/repoB.git
git remote -v
```

### Token Generation
1. Go to GitHub Settings > Developer settings > Personal access tokens.
URL: https://github.com/settings/tokens

### First Push
Use the *token* to authenticate the first push.
```powershell
git push origin main
```
