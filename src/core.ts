import Client, {
  BatchSetCdnDomainServerCertificateRequest,
  BatchSetCdnDomainServerCertificateResponseBody,
  CreateCdnCertificateSigningRequestRequest,
  CreateCdnCertificateSigningRequestResponseBody,
  DescribeCdnCertificateDetailRequest,
  DescribeCdnCertificateDetailResponseBody,
  DescribeCdnDomainByCertificateRequest,
  DescribeCdnDomainByCertificateResponseBody,
  DescribeCdnHttpsDomainListRequest,
  DescribeCdnHttpsDomainListResponseBody,
  DescribeCdnSSLCertificateListRequest,
  DescribeCdnSSLCertificateListResponseBody,
  DescribeCertificateInfoByIDRequest,
  DescribeCertificateInfoByIDResponseBody,
  DescribeDomainCertificateInfoRequest,
  DescribeDomainCertificateInfoResponseBody,
  DescribeUserCertificateExpireCountResponseBody,
  SetCdnDomainCSRCertificateRequest,
  SetCdnDomainCSRCertificateResponseBody,
  SetCdnDomainSSLCertificateRequest,
  SetCdnDomainSSLCertificateResponseBody
} from '@alicloud/cdn20180510';
import * as $OpenApi from '@alicloud/openapi-client';
import moment from 'moment';

export class CdnCert {
  /**
   * 创建客户端
   * @param {string} accessKey
   * @param {string} accessSecret
   * @returns {Client}
   */
  createClient(accessKey: string, accessSecret: string): Client {
    const config = new $OpenApi.Config({
      accessKeyId: accessKey,
      accessKeySecret: accessSecret
    });

    return new Client(config);
  }

  /**
   * 创建证书签名请求文件
   * @param {Client} client
   * @param {string} commonName
   * @returns {Promise<CreateCdnCertificateSigningRequestResponseBody>}
   */
  async createCertSigningRequest(client: Client, commonName: string): Promise<CreateCdnCertificateSigningRequestResponseBody> {
    const request = new CreateCdnCertificateSigningRequestRequest({});
    request.commonName = commonName;
    const response = await client.createCdnCertificateSigningRequest(request);

    return response.body;
  }

  /**
   * 获取加速域名的证书信息
   * @param {Client} client
   * @param {string} domain
   * @returns {Promise<DescribeDomainCertificateInfoResponseBody>}
   */
  async getDomainCertInfo(client: Client, domain: string): Promise<DescribeDomainCertificateInfoResponseBody> {
    const request = new DescribeDomainCertificateInfoRequest({});
    request.domainName = domain;
    const response = await client.describeDomainCertificateInfo(request);

    return response.body;
  }

  /**
   * 设置加速域名的证书信息
   * @param {Client} client
   * @param {string} domain
   * @param {string} certStatus
   * @param {string} certName
   * @returns {Promise<SetCdnDomainSSLCertificateResponseBody>}
   */
  async setDomainCert(client: Client, domain: string, certStatus: string, certName: string): Promise<SetCdnDomainSSLCertificateResponseBody> {
    const request = new SetCdnDomainSSLCertificateRequest({});
    request.domainName = domain;
    request.serverCertificateStatus = certStatus;
    request.certName = certName;
    const response = await client.setCdnDomainSSLCertificate(request);

    return response.body;
  }

  /**
   * 设置加速域名的证书信息
   * @param {Client} client
   * @param {string} domain
   * @param {string} certStatus
   * @param {string} cert
   * @param {string} privateKey
   * @returns {Promise<SetCdnDomainSSLCertificateResponseBody>}
   */
  async setDomainCertByPrivateKey(client: Client, domain: string, certStatus: string, cert: string, privateKey: string): Promise<SetCdnDomainSSLCertificateResponseBody> {
    const request = new SetCdnDomainSSLCertificateRequest({});
    request.domainName = domain;
    request.serverCertificateStatus = certStatus;
    request.serverCertificate = cert;
    request.privateKey = privateKey;
    const response = await client.setCdnDomainSSLCertificate(request);

    return response.body;
  }

  /**
   * 设置HTTPS证书
   * @param {Client} client
   * @param {string} domain
   * @param {string} cert
   * @returns {Promise<SetCdnDomainCSRCertificateResponseBody>}
   */
  async setCdnDomainCSRCert(client: Client, domain: string, cert: string): Promise<SetCdnDomainCSRCertificateResponseBody> {
    const request = new SetCdnDomainCSRCertificateRequest({});
    request.domainName = domain;
    request.serverCertificate = cert;
    const response = await client.setCdnDomainCSRCertificate(request);

    return response.body;
  }

  /**
   * 获取证书信息对应加速域名
   * @param {Client} client
   * @param {string} SSLPub
   * @returns {Promise<DescribeCdnDomainByCertificateResponseBody>}
   */
  async getCdnDomainByCert(client: Client, SSLPub: string): Promise<DescribeCdnDomainByCertificateResponseBody> {
    const request = new DescribeCdnDomainByCertificateRequest({});
    request.SSLPub = SSLPub;
    const response = await client.describeCdnDomainByCertificate(request);

    return response.body;
  }

  /**
   * 获取CDN证书的详细信息
   * @param {Client} client
   * @param {string} certName
   * @returns {Promise<DescribeCdnCertificateDetailResponseBody>}
   */
  async getCdnCertDetail(client: Client, certName: string): Promise<DescribeCdnCertificateDetailResponseBody> {
    const request = new DescribeCdnCertificateDetailRequest({});
    request.certName = certName;
    const response = await client.describeCdnCertificateDetail(request);

    return response.body;
  }

  /**
   * 获取证书的列表信息
   * @param {Client} client
   * @returns {Promise<DescribeCdnSSLCertificateListResponseBody>}
   */
  async getCdnCertList(client: Client): Promise<DescribeCdnSSLCertificateListResponseBody> {
    const request = new DescribeCdnSSLCertificateListRequest({});
    const response = await client.describeCdnSSLCertificateList(request);

    return response.body;
  }

  /**
   * 获取证书ID对应的证书信息
   * @param {Client} client
   * @param {string} certId
   * @returns {Promise<DescribeCertificateInfoByIDResponseBody>}
   */
  async getCertInfoByID(client: Client, certId: string):Promise<DescribeCertificateInfoByIDResponseBody> {
    const request = new DescribeCertificateInfoByIDRequest({});
    request.certId = certId;
    const response = await client.describeCertificateInfoByID(request);

    return response.body;
  }

  /**
   * 获取用户所有证书信息
   * @param {Client} client
   * @returns {Promise<DescribeCdnHttpsDomainListResponseBody>}
   */
  async getCdnHttpsDomainList(client):Promise<DescribeCdnHttpsDomainListResponseBody> {
    const request = new DescribeCdnHttpsDomainListRequest({});
    const response = await client.describeCdnHttpsDomainList(request);

    return response.body;
  }

  /**
   * 批量设置加速域名证书信息
   * @param {Client} client
   * @param {string} domain
   * @param {string} SSLProtocol
   * @param {string} certName
   * @param {string} certType
   * @returns {Promise<BatchSetCdnDomainServerCertificateResponseBody>}
   */
  async batchSetCdnDomainCert(client: Client, domain: string, SSLProtocol: string, certName: string, certType: string): Promise<BatchSetCdnDomainServerCertificateResponseBody> {
    const request = new BatchSetCdnDomainServerCertificateRequest({});
    request.domainName = domain;
    request.SSLProtocol = SSLProtocol;
    request.certName = certName;
    request.certType = certType;
    const response = await client.batchSetCdnDomainServerCertificate(request);

    return response.body;
  }

  /**
   * 获取用户证书过期的域名数
   * @param {Client} client
   * @returns {Promise<DescribeUserCertificateExpireCountResponseBody>}
   */
  async getUserCertExpireCount(client: Client): Promise<DescribeUserCertificateExpireCountResponseBody> {
    const response = await client.describeUserCertificateExpireCount();

    return response.body;
  }

  /**
   * 设置HTTPS证书
   * @param {Client} client
   * @param {string} domain
   * @param {string} SSLPub
   * @param {string} SSLPri
   * @returns {Promise<SetCdnDomainSSLCertificateResponseBody>}
   */
  async setCdnDomainSSLCert(client: Client, domain: string, SSLPub: string, SSLPri: string) : Promise<SetCdnDomainSSLCertificateResponseBody> {
    const request = new SetCdnDomainSSLCertificateRequest({});
    request.domainName = domain;
    request.certName = `${domain}-${moment().format('YYMMDDHHmmss')}`;
    request.certType = 'upload';
    request.SSLProtocol = 'on';
    request.SSLPub = SSLPub;
    request.SSLPri = SSLPri;
    const response = await client.setCdnDomainSSLCertificate(request);

    return response.body;
  }
}
