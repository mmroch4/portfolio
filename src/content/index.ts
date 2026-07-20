import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "./types";
import { en } from "./en";
import { pt } from "./pt";

const dictionaries: Record<Locale, Dictionary> = { en, pt };

/** Returns the full content dictionary for a locale. */
export function getDictionary(locale: Locale): Dictionary {
    return dictionaries[locale];
}

/**
 * Fills `{placeholder}` tokens in a dictionary string.
 * Used for the handful of strings that interpolate a name or title, where
 * word order differs between languages (e.g. "{name} profile" vs
 * "Perfil de {name}").
 */
export function format(
    template: string,
    values: Record<string, string>,
): string {
    return template.replace(/\{(\w+)\}/g, (match, key) => values[key] ?? match);
}

export type { Dictionary } from "./types";
