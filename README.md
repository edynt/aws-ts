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
  --- Download the MySQL 8.0 repository: wget https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm
  --- Install mysql repo: sudo rpm -ivh mysql80-community-release-el7-3.noarch.rpm
  --- Verify the MySQL repository has been added: sudo yum repolist enabled | grep "mysql.*-community"
  --- Install MySQL 8.0: sudo yum install mysql-community-server -y
  --- Start MySQL Service: sudo service mysqld start
  --- Get the MySQL Root Password: sudo grep 'temporary password' /var/log/mysqld.log
  --- Secure MySQL Installation: sudo mysql_secure_installation
  --- Check MySQL Status: sudo service mysqld status
  --- Login to Mysql: mysql -u root -p