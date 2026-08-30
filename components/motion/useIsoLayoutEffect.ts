"use client";

import { useEffect, useLayoutEffect } from "react";

/**
 * useLayoutEffect on the client, useEffect on the server.
 *
 * Sequences that ship their finished frame in the markup have to strip it
 * before the browser paints, or the settled state flashes and then rewinds.
 * useEffect is too late for that; useLayoutEffect warns during SSR.
 */
export const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
