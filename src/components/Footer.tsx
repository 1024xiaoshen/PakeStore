// components/Footer.js
import Link from 'next/link'
import {
    MailIcon,
    PhoneIcon,
    MapPinIcon,
    XIcon,
    GithubIcon,
    Youtube,
    Twitter,
} from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-background text-secondary-foreground pt-6 pb-6">
            <div className="container mx-auto px-4 md:px-6">
                {/* 主要内容区 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
                    {/* 品牌和简介 */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">PakeStore</h3>
                        <p className="text-gray-400 mb-6">
                            发现最好的开源应用，无广告无追踪无恶意软件。关注我们，提交你的应用和项目，让开源应用被更多人发现和使用。
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                                aria-label="Facebook"
                            >
                                <XIcon size={20} />
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                                aria-label="Twitter"
                            >
                                <GithubIcon size={20} />
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                                aria-label="Instagram"
                            >
                                <Youtube size={20} />
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                                aria-label="LinkedIn"
                            >
                                <MailIcon size={20} />
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                                aria-label="LinkedIn"
                            >
                                <Twitter size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* 快速链接 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">快速链接</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                                >
                                    <span className="mr-2">→</span>关于我们
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                                >
                                    <span className="mr-2">→</span>服务
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/products"
                                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                                >
                                    <span className="mr-2">→</span>产品
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                                >
                                    <span className="mr-2">→</span>联系我们
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* 联系我们 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">联系我们</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <MapPinIcon
                                    className="text-gray-400 mr-3 mt-1 flex-shrink-0"
                                    size={18}
                                />
                                <span className="text-gray-400">
                                    北京市朝阳区建国路88号
                                </span>
                            </li>
                            <li className="flex items-center">
                                <PhoneIcon
                                    className="text-gray-400 mr-3 flex-shrink-0"
                                    size={18}
                                />
                                <span className="text-gray-400">
                                    +86 10 8888 8888
                                </span>
                            </li>
                            <li className="flex items-center">
                                <MailIcon
                                    className="text-gray-400 mr-3 flex-shrink-0"
                                    size={18}
                                />
                                <span className="text-gray-400">
                                    info@mybrand.com
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* 订阅通讯 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">订阅通讯</h3>
                        <p className="text-gray-400 mb-4">
                            订阅我们的通讯，获取最新的产品信息和优惠活动。
                        </p>
                        <form className="space-y-2">
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="您的邮箱地址"
                                    className="px-4 rounded-l-md bg-input focus:outline-none w-full"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-2 py rounded-r-md transition-colors duration-300 w-20 h-10"
                                >
                                    订阅
                                </button>
                            </div>
                            <p className="text-xs text-gray-500">
                                我们尊重您的隐私，不会向第三方分享您的信息。
                            </p>
                        </form>
                    </div>
                </div>
                {/* 分隔线 */}
                <div className="border-t pt-6">
                    {/* 版权信息和底部链接 */}
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm mb-4 md:mb-0">
                            © {new Date().getFullYear()} PakeStore
                            保留所有权利。
                        </p>
                        <div className="flex space-x-6">
                            <Link
                                href="/privacy-policy"
                                className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300"
                            >
                                隐私政策
                            </Link>
                            <Link
                                href="/terms-of-service"
                                className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300"
                            >
                                服务条款
                            </Link>
                            <Link
                                href="/sitemap"
                                className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300"
                            >
                                网站地图
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
