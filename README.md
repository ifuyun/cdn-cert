# CDN Cert

自动将 Let's encrypt 证书推送到阿里云 CDN。

## 使用方法

1. 下载项目：`git clone git@github.com:ifuyun/cdn-cert.git`
2. 复制`config.sample.ts`，将其命名为`config.ts`，并修改配置。
3. 执行`npm i`安装依赖。
4. 执行`npm run start:dev`更新证书。
5. 执行`npm run start:demo`运行示例。

## 配置

以对象数组的形式配置多个用户和域名：

| 配置项                     | 说明               |
|-------------------------|------------------|
| accessKeyId             | AccessKey ID     |
| accessKeySecret         | AccessKey Secret |
| regionId                | 可用区ID，可选         |
| cert                    | 证书配置             |
| cert.certDomain         | 根域名              |
| cert.certPublicKeyPath  | 证书路径             |
| cert.certPrivateKeyPath | 证书私钥路径           |
| cert.cdnDomains         | CDN域名列表          |

## 定时更新

```bash
crontab -e
```
```ini
# 每周日 04:00 执行
0 4 * * 0 node /path/to/repo/dist/index.js
```

或者在`certbot renew`命令中追加`--deploy-hook "node /path/to/repo/dist/index.js"`参数：

```bash
certbot renew --manual --preferred-challenges dns --manual-auth-hook "alidns" --manual-cleanup-hook "alidns clean" --deploy-hook "node /path/to/repo/dist/index.js"
```