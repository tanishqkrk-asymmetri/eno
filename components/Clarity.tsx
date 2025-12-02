"use client";

import { useEffect } from "react";

export default function ClarityScript() {
  useEffect(() => {
    (function (
      c: any,
      l: Document,
      a: string,
      r: string,
      i: string,
      t: HTMLScriptElement,
      y: HTMLScriptElement
    ) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      t = l.createElement(r) as HTMLScriptElement;
      t.async = true;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0] as HTMLScriptElement;
      y.parentNode!.insertBefore(t, y);
    })(window, document, "clarity", "script", "uf3q8u766o");
  }, []);

  return null;
}
