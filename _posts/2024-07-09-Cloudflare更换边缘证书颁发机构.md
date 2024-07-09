---  
layout: post  
title: Cloudflare更换边缘证书颁发机构  
name: 2024-07-09-Cloudflare更换边缘证书颁发机构  
description: Let's Encrypt 证书只有 3 个月而且验证巨慢，是否可以将边缘证书颁发机构替换为其他机构呢？答案是可以的。  
categories:  
  - cloudflare  
  - SSL证书  
keywords:  
  - Cloudflare  
  - SSL证书  
share: true  
topmost: false  
---  
  
杨幂的脚 2024-07-032024-07-05  
  
Let's Encrypt 证书只有 3 个月而且**验证巨 TM 慢**！！！  
  
## 如何操作  
  
1. **禁用通用 SSL**删除原有证书    
    [![禁用通用SSL删除原先证书](https://img.090227.xyz/file/f90fa53e3310a471eaf40.png)](https://img.090227.xyz/file/f90fa53e3310a471eaf40.png)  
      
2. 获取**区域 ID**    
    [![获取API](https://img.090227.xyz/file/bea582e6ef6ccd582e16c.png)](https://img.090227.xyz/file/bea582e6ef6ccd582e16c.png)  
      
3. 获取**Global API Key 密钥**    
    [![Global API Key](https://img.090227.xyz/file/e1dabf563a35216e57a91.png)](https://img.090227.xyz/file/e1dabf563a35216e57a91.png)  
      
4. 执行如下命令    
    替换如下命令中的**区域 ID**、**账户邮箱**、**Global API Key 密钥**为你提取到的值  
  
	```  
	curl -X PATCH "https://api.cloudflare.com/client/v4/zones/区域ID/ssl/universal/settings" \    
	     -H "Content-Type: application/json" \    
	     -H "X-Auth-Email: 账户邮箱" \    
	     -H "X-Auth-Key: Global API Key密钥" \    
	     --data '{"certificate_authority": "digicert"}'  
	```  
  
---  
  
原文：[https://blog.intel.im/archives/cloudflare-geng-huan-bian-yuan-zheng-shu-ban-fa-ji-gou](https://blog.intel.im/archives/cloudflare-geng-huan-bian-yuan-zheng-shu-ban-fa-ji-gou)  
