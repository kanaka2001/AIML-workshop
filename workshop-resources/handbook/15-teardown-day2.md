# Chapter 15 — Day 2 Resource Teardown

**Day 2 | 12:30 PM – 12:45 PM | 15 minutes**

---

## 🎯 What This Session Is About

Safely shut down and delete all resources created during Day 2 before leaving.

---

## 🧹 Teardown Checklist

Work through each item with the facilitator:

---

### 1. Stop SageMaker Canvas Workspace

```
In Canvas → Bottom-left corner → Click the Account icon
→ Click "Sign out"
```

This terminates the active Canvas session and stops billing.

- [ ] ✅ Signed out of Canvas

---

### 2. Verify Canvas is Stopped

```
AWS Console → SageMaker → Domains
→ Click your Domain name
→ Click your User Profile
→ Check that the Canvas app status shows: Stopped
```

- [ ] ✅ Canvas app status: Stopped

---

### 3. (Optional) Delete SageMaker Domain

Only do this if you created a new SageMaker Domain specifically for this workshop:

```
Click "Delete user profile" → Confirm
Click "Delete domain" → Confirm
```

- [ ] ✅ Domain deleted (if applicable)

---

### 4. Check for Any Remaining EC2 or S3 Resources

```
EC2 → Instances → Confirm no instances are Running
S3  → Confirm no buckets remain
```

- [ ] ✅ No running EC2 instances
- [ ] ✅ No S3 buckets remaining

---

### 5. Final Billing Verification

```
AWS Console → Search: Billing → Bills
→ Review current month charges
→ Check "Free Tier Usage" — verify limits are not exceeded
```

- [ ] ✅ Billing checked — no unexpected charges

---

## ✏️ Reflection

```
What is the most important reason to always clean up
cloud resources after a workshop or project?

→ _______________________________________________
  _______________________________________________
```

---

## ✅ Chapter Checklist

- [ ] Canvas workspace stopped
- [ ] Canvas app status verified as Stopped
- [ ] No EC2 instances running
- [ ] No S3 buckets remaining
- [ ] Billing dashboard checked

---

## 🏆 Badge Unlocked

> **CLEAN CLOUD 🧹** — Every good builder leaves the cloud as clean as they found it.

---

> ✅ **Done? This is the final chapter:**
> 👉 [Chapter 16 — Workshop Wrap-Up & Next Steps](16-wrapup.md)
