<!-- Note: If don't note, please set to default -->

- Set up S3
  -- Step 1: First, create policy
  -- Step 2: Select set role: 
    --- Read: GetObject
    --- Write: PutObject, DeleteObject

  -- Step 3: Resources
    ---  Choose Specific
      ---- add ARNs to restrict access
      ----- Resource bucket name: <name-bucket>
      ----- Set any object name

  -- Step 4: Policy name: <policy-name>

  -- Step 5: Create IAM
      --- Choose Attach policies directly
      --- Create Access Key




- Set up Cloudfront
 -- Create Cloudfront
 -- Origin Domain: Select S3
 -- Origin Access: 
    --- Select Legacy access identities
    --- Create new OAI (là một cách giúp bạn bảo mật nội dung trên S3 khi phân phối qua CloudFront.)
    --  Bucket policy: Select Yes