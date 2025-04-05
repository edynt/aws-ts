<!-- Note: If don't note, please set to default -->

- Set up IAM
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
        --- ARN: add <name-bucket>

  -- Step 5: Create IAM
      --- Choose Attach policies directly
      --- Create Access Key

- Set up S3:
  -- Please set default



- Set up Cloudfront
 -- Create Cloudfront
 -- Origin Domain: Select S3
 -- Origin Access: 
    --- Select Legacy access identities
    --- Create new OAI (là một cách giúp bạn bảo mật nội dung trên S3 khi phân phối qua CloudFront.)
    --  Bucket policy: Select Yes



- Set up EC2 & mysql:
  -- Cmd: 
  -- Chạy lệnh để cài đặt các gói: sudo amazon-linux-extras install epel -y
  --- Install mysql 8: sudo yum install https://dev.mysql.com/get/mysql80-community-release-el7-5.noarch.rpm
  --- Cấu hình mysql server: sudo yum install mysql-community-server -y
  --- Enable Mysql: sudo systemctl start mysqld
  --- Check status mysql: sudo systemctl status mysqld
