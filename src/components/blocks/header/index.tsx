import { AnnouncementBar } from "./announcement-bar";

export function Header({ announcement }: { announcement: string }) {
    return (
        <header>
            <AnnouncementBar announcement={announcement} />
        </header>
    );
}
