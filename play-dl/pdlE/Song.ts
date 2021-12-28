import { Duration } from "./Duration";
import { Thumbnail } from "./Thumbnail";

/**
 * Provides all the necessary information for playing music in Discord bots
 */
export interface Song {
    url: string;
    duration: Duration;
    title?: string;
    author?: string;
    albumName?: string;
    thumbnail?: Thumbnail;
}
