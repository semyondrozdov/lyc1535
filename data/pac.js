function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, '2ip.ru') || dnsDomainIs(host, "online1535.ru") || dnsDomainIs(host, "*.online1535.ru")) {
		return "PROXY proxy.lyc1535.ru:3128";
	}
	return "DIRECT";
}
