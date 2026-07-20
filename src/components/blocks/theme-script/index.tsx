/**
 * No-flash theme init: runs before paint so the correct theme is applied
 * without a flash of the wrong colors.
 *
 * Lives in its own component because there are two root layouts (one per
 * locale) that both need it verbatim — see `app/(en)` and `app/(pt)`.
 */
export function ThemeScript() {
    return (
        <script
            dangerouslySetInnerHTML={{
                __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`,
            }}
        />
    );
}
