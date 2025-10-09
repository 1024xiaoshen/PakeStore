export default function BlankLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <body>{children}</body>
        </html>
    )
}
