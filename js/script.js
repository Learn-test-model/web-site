// js/navigation.js
const navigation = `
    <nav>
        <ul>
            <li><a href="/index.html">ホーム</a></li>
            <li><a href="/products/index.html">一覧</a></li>
            <li><a href="/blog/index.html">開発中</a></li>
        </ul>
    </nav>
`;

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    if (header) {
        header.innerHTML = navigation;
    }
});