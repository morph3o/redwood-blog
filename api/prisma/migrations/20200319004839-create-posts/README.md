# Migration `20200319004839-create-posts`

This migration has been generated at 3/19/2020, 12:48:39 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "quaint"."Post" (
    "body" TEXT NOT NULL DEFAULT '' ,
    "createdAt" DATE NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    "id" TEXT NOT NULL  ,
    "title" TEXT NOT NULL DEFAULT '' ,
    PRIMARY KEY ("id")
) 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200319004839-create-posts
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,16 @@
+datasource DS {
+  provider = "sqlite"
+  url = env("DATABASE_URL")
+}
+
+generator photonjs {
+  provider = "prisma-client-js"
+  binaryTargets = ["native", "rhel-openssl-1.0.x"]
+}
+
+model Post {
+  id        String @id @default(uuid())
+  title     String
+  body      String
+  createdAt DateTime @default(now())
+}
```


