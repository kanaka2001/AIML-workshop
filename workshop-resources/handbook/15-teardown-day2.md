# Chapter 15 — Day 2 Resource Teardown

**Day 2 | 12:30 PM – 12:45 PM | 15 minutes**

---

## 🎯 What This Session Is About

Safely shut down and delete all Day 2 cloud resources before leaving.

> 💸 SageMaker Canvas charges for active workspace sessions. Always sign out and verify it has stopped.

---

## 🧹 Teardown Checklist

### 1. Stop SageMaker Canvas Workspace

```
In Canvas → Bottom-left corner → Click the Account icon
→ Click "Sign out"
```

- [ ] ✅ Signed out of Canvas

---

### 2. Verify Canvas is Stopped

```
AWS Console → SageMaker → Domains
→ Click your Domain name → Click your User Profile
→ Confirm Canvas app status shows: Stopped
```

- [ ] ✅ Canvas app status: Stopped

---

### 3. (Optional) Delete SageMaker Domain

Only if you created a new domain specifically for this workshop:

```
Click "Delete user profile" → Confirm
Click "Delete domain" → Confirm
```

- [ ] ✅ Domain deleted (or left intact intentionally)

---

### 4. Check for Remaining EC2 or S3 Resources

```
EC2 → Instances → Confirm no instances are in Running state
S3  → Confirm no buckets remain
```

- [ ] ✅ No running EC2 instances
- [ ] ✅ No S3 buckets remaining

---

### 5. Final Billing Check

```
AWS Console → Search: Billing → Bills
→ Review current month charges
→ Check "Free Tier Usage" dashboard
```

- [ ] ✅ No unexpected charges

---

## ✅ Chapter Checklist

- [ ] Canvas workspace stopped and verified
- [ ] No EC2 instances running
- [ ] No S3 buckets remaining
- [ ] Billing dashboard checked

---

## 🏆 Badge Unlocked

> ### 🧹 CLEAN CLOUD
> Every good cloud engineer leaves the environment as clean as they found it.

---

> ✅ **One chapter left:**
> ### 👉 [Chapter 16 — Workshop Wrap-Up & Next Steps](16-wrapup.md)
