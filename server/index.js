import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, NavLink, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, useNavigate } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState, forwardRef, useRef } from "react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("header", { children: [
    /* @__PURE__ */ jsx(NavLink, { to: "/", className: "logo-img", children: /* @__PURE__ */ jsx("img", { src: "img/Icon_2025.png", alt: "icon" }) }),
    /* @__PURE__ */ jsxs("nav", { children: [
      /* @__PURE__ */ jsx(NavLink, { to: "/", children: "Home" }),
      /* @__PURE__ */ jsx(NavLink, { to: "/about", children: "About" }),
      /* @__PURE__ */ jsx(NavLink, { to: "/experience", children: "Experience" })
    ] }),
    /* @__PURE__ */ jsx("button", { onClick: () => setOpen(!isOpen), children: isOpen ? /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        width: "20",
        height: "20",
        viewBox: "0 0 50 50",
        children: /* @__PURE__ */ jsx("path", { d: "M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" })
      }
    ) : /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        width: "20",
        height: "20",
        viewBox: "0 0 50 50",
        children: /* @__PURE__ */ jsx("path", { d: "M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" })
      }
    ) }),
    isOpen && /* @__PURE__ */ jsxs("div", { className: "modal", children: [
      /* @__PURE__ */ jsx(NavLink, { to: "/", children: "Home" }),
      /* @__PURE__ */ jsx(NavLink, { to: "/about", children: "About" }),
      /* @__PURE__ */ jsx(NavLink, { to: "/experience", children: "Experience" })
    ] })
  ] }) });
};
const Footer = forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsxs("footer", { ref, children: [
      /* @__PURE__ */ jsxs("div", { className: "wrapper mb-4", children: [
        /* @__PURE__ */ jsx("h1", { children: "Cinehaven" }),
        /* @__PURE__ */ jsx("h5", { children: "Forever starts with a perfect shot." })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Phone Number: ",
        /* @__PURE__ */ jsx("span", { className: "font-bold", children: "09204787850" })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Studio Service: CALABARZON" }),
      /* @__PURE__ */ jsxs("div", { className: "social-icons", children: [
        /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/nicolinestudio", target: "_blank", children: /* @__PURE__ */ jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            width: "24",
            height: "24",
            viewBox: "0 0 50 50",
            children: /* @__PURE__ */ jsx("path", { d: "M 11.300781 2 C 6.1645496 2 2 6.1645496 2 11.300781 L 2 38.800781 C 2 43.937013 6.1645496 48.099609 11.300781 48.099609 L 38.800781 48.099609 C 43.937013 48.099609 48.099609 43.937013 48.099609 38.800781 L 48.099609 11.289062 L 48.099609 11.277344 C 47.988214 6.1531405 43.848929 2 38.800781 2 L 11.300781 2 z M 11.300781 4 L 38.800781 4 C 42.752633 4 46.011005 7.2464683 46.099609 11.322266 L 46.099609 38.800781 C 46.099609 42.864549 42.864549 46.099609 38.800781 46.099609 L 33 46.099609 L 33 29 L 37.847656 29 L 39.179688 21 L 33 21 L 33 19 C 33 18.45 33.05476 18.405705 33.251953 18.279297 C 33.44915 18.152889 34.029365 18 35 18 L 39 18 L 39 11.271484 L 38.306641 11.048828 C 38.306641 11.048828 35.129885 10 32 10 C 29.096296 10 26.957792 10.953443 25.679688 12.632812 C 24.401582 14.312183 24 16.536525 24 19 L 24 21 L 21 21 L 21 29 L 24 29 L 24 46.099609 L 11.300781 46.099609 C 7.2370133 46.099609 4 42.864549 4 38.800781 L 4 11.300781 C 4 7.2370133 7.2370133 4 11.300781 4 z M 32 12 C 34.168683 12 36.174546 12.537635 37 12.773438 L 37 16 L 35 16 C 33.870635 16 32.949678 16.09711 32.171875 16.595703 C 31.394072 17.094295 31 18.05 31 19 L 31 23 L 36.820312 23 L 36.152344 27 L 31 27 L 31 46.099609 L 26 46.099609 L 26 27 L 23 27 L 23 23 L 26 23 L 26 19 C 26 16.763475 26.399589 14.98938 27.271484 13.84375 C 28.14338 12.69812 29.503704 12 32 12 z" })
          }
        ) }),
        /* @__PURE__ */ jsx("a", { href: "https://www.youtube.com/@nicolinestudio", target: "_blank", children: /* @__PURE__ */ jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            width: "24",
            height: "24",
            viewBox: "0 0 50 50",
            children: /* @__PURE__ */ jsx("path", { d: "M 24.402344 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.402344 16.898438 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.902344 40.5 17.898438 41 24.5 41 C 31.101563 41 37.097656 40.5 40.597656 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.097656 35.5 C 45.5 33 46 29.402344 46.097656 24.902344 C 46.097656 20.402344 45.597656 16.800781 45.097656 14.300781 C 44.699219 12.101563 42.800781 10.5 40.597656 10 C 37.097656 9.5 31 9 24.402344 9 Z M 24.402344 11 C 31.601563 11 37.398438 11.597656 40.199219 12.097656 C 41.699219 12.5 42.898438 13.5 43.097656 14.800781 C 43.699219 18 44.097656 21.402344 44.097656 24.902344 C 44 29.199219 43.5 32.699219 43.097656 35.199219 C 42.800781 37.097656 40.800781 37.699219 40.199219 37.902344 C 36.597656 38.601563 30.597656 39.097656 24.597656 39.097656 C 18.597656 39.097656 12.5 38.699219 9 37.902344 C 7.5 37.5 6.300781 36.5 6.101563 35.199219 C 5.300781 32.398438 5 28.699219 5 25 C 5 20.398438 5.402344 17 5.800781 14.902344 C 6.101563 13 8.199219 12.398438 8.699219 12.199219 C 12 11.5 18.101563 11 24.402344 11 Z M 19 17 L 19 33 L 33 25 Z M 21 20.402344 L 29 25 L 21 29.597656 Z" })
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("small", { children: "© 2025 Cinehaven Photography. All rights reserved." })
    ] });
  }
);
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(Footer, {})]
  });
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const imageData = [
  {
    title: "flowers",
    url: "/img/flowers.jpg"
  },
  {
    title: "heart",
    url: "/img/heart.jpg"
  },
  {
    title: "invitation",
    url: "/img/invitation.jpg"
  },
  {
    title: "table",
    url: "/img/table.jpg"
  },
  {
    title: "testimony",
    url: "/img/testimony.jpg"
  }
];
const videoData = [
  {
    title: "Martin & Mati",
    src: "https://www.youtube.com/embed/oLyBzCFWmT4?si=q-yK4nw_FzGpeCLV"
  },
  {
    title: "Herwin & Cherry",
    src: "https://www.youtube.com/embed/Xp_omrNQpQI?si=DwJzep6wMB2usHS_"
  },
  {
    title: "Stan & Rhizza",
    src: "https://www.youtube.com/embed/Lz6fWNAFJ4c?si=GEb8O_y1FTKcDcP6"
  }
];
const Home = () => {
  const navigate = useNavigate();
  useRef(null);
  const duplicatedImages = [...imageData, ...imageData];
  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  };
  const handleAboutClick = () => {
    navigate("/about");
  };
  return /* @__PURE__ */ jsxs("main", {
    children: [/* @__PURE__ */ jsx("div", {
      className: "home-hero",
      children: /* @__PURE__ */ jsx("img", {
        src: "/img/CinveHaven_Logo_2025.png",
        alt: "brand"
      })
    }), /* @__PURE__ */ jsxs("div", {
      className: "short-description",
      children: [/* @__PURE__ */ jsx("h4", {
        children: "Where Every Frame Tells a Love Story."
      }), /* @__PURE__ */ jsx("img", {
        src: "/img/heart.jpg",
        alt: "heart image",
        loading: "lazy"
      }), /* @__PURE__ */ jsx("small", {
        children: "At Cinehaven, we believe every love story deserves to be told with cinematic beauty and heartfelt authenticity. Through timeless photography and a keen eye for emotion, we capture the moments that make your wedding unforgettable—so you can relive them forever."
      }), /* @__PURE__ */ jsx(NavLink, {
        to: "/experience",
        children: "Learn More"
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "connect-section",
      children: /* @__PURE__ */ jsxs("div", {
        className: "wrapper",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "text-wrapper",
          children: [/* @__PURE__ */ jsx("h4", {
            children: "Let's Capture Your Story"
          }), /* @__PURE__ */ jsx("h3", {
            children: "EXPERIENCE A WEDDING FILM AS UNFORGETTABLE AS YOUR LOVE"
          })]
        }), /* @__PURE__ */ jsx("button", {
          onClick: handleScrollToBottom,
          children: "Connect Today"
        })]
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "testimony",
      children: /* @__PURE__ */ jsx("div", {
        className: "bg-wrapper",
        children: /* @__PURE__ */ jsxs("div", {
          className: "text-container",
          children: [/* @__PURE__ */ jsx("h2", {
            children: "Marvin and Ela"
          }), /* @__PURE__ */ jsx("p", {
            children: '"Working with Cinehaven was an absolute dream. They didn’t just take photos — they captured the soul of our wedding day. Every image is filled with emotion, light, and love, and we find something new to smile about every time we look at our gallery. The team made us feel comfortable and seen, and their passion shows in every shot. We’ll treasure these memories forever."'
          })]
        })
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "about-me-home",
      children: /* @__PURE__ */ jsxs("div", {
        className: "wrapper",
        children: [/* @__PURE__ */ jsx("img", {
          src: "/img/kuyanics.jpg",
          alt: "",
          loading: "lazy"
        }), /* @__PURE__ */ jsxs("div", {
          className: "text-wrapper",
          children: [/* @__PURE__ */ jsx("h4", {
            children: "NICOLAS DEL ROSARIO"
          }), /* @__PURE__ */ jsx("small", {
            children: "Nicolas is a passionate wedding photographer with a talent for capturing authentic moments and timeless emotions. With an eye for natural light and a love for storytelling, he turns each celebration into a visual narrative that couples can cherish forever. His calm presence and attention to detail help couples feel comfortable and confident in front of the camera."
          }), /* @__PURE__ */ jsx("button", {
            onClick: handleAboutClick,
            children: "About Me"
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "gallery-container",
      children: /* @__PURE__ */ jsx("div", {
        className: "wrapper",
        children: duplicatedImages.map((image, index) => /* @__PURE__ */ jsx("div", {
          className: "image-container",
          children: /* @__PURE__ */ jsx("img", {
            src: image.url,
            alt: image.title,
            loading: "lazy"
          })
        }, index))
      })
    })]
  });
};
const home = UNSAFE_withComponentProps(Home);
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home
}, Symbol.toStringTag, { value: "Module" }));
const about = () => {
  return /* @__PURE__ */ jsxs("main", {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "about-hero",
      children: [/* @__PURE__ */ jsx("div", {
        className: "absolute inset-0 bg-gradient-to-b from-(--text-dark)/50 to-transparent z-0"
      }), /* @__PURE__ */ jsxs("h1", {
        children: ["About ", /* @__PURE__ */ jsx("br", {}), " CineHaven"]
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "cinehaven-story",
      children: /* @__PURE__ */ jsxs("div", {
        className: "wrapper",
        children: [/* @__PURE__ */ jsx("h2", {
          children: "How CineHaven Started"
        }), /* @__PURE__ */ jsx("p", {
          children: "CineHaven was born out of a simple favor for a friend. In 2022, I was asked to film a small backyard wedding. I had no formal training—just a camera, a passion for storytelling, and a deep appreciation for emotion-driven moments. What started as a humble gesture quickly turned into something much more. The joy on the couple’s faces when they watched their wedding film sparked something in me—a realization that this was more than just a video; it was a time capsule of love."
        }), /* @__PURE__ */ jsx("p", {
          children: "From that moment on, I immersed myself in the craft. I studied filmmaking, photography, lighting, and editing with relentless curiosity. One wedding turned into five, then ten, and soon CineHaven was born—not just as a business, but as a promise: to turn fleeting moments into timeless visual memories for couples who value authenticity, emotion, and beauty."
        })]
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "about-me-content",
      children: /* @__PURE__ */ jsxs("div", {
        className: "about-me-container",
        children: [/* @__PURE__ */ jsx("h2", {
          children: "More Things About Me"
        }), /* @__PURE__ */ jsxs("div", {
          className: "wrapper",
          children: [/* @__PURE__ */ jsx("img", {
            src: "/img/kuyanics.jpg",
            alt: ""
          }), /* @__PURE__ */ jsxs("div", {
            className: "text-container",
            children: [/* @__PURE__ */ jsx("h3", {
              children: "NICOLAS DEL ROSARIO"
            }), /* @__PURE__ */ jsx("h6", {
              children: "FOUNDER, FILMMAKER"
            }), /* @__PURE__ */ jsx("p", {
              children: "I’m a wedding photographer and filmmaker based in Cavite, and I’ve been telling real love stories through my lens since 2022. What began as a passion for visual storytelling turned into a heartfelt mission: to capture the raw, emotional, once-in-a-lifetime moments that define your wedding day."
            })]
          })]
        }), /* @__PURE__ */ jsx("p", {
          children: "When I’m not behind the camera, you’ll probably find me sipping a strong cup of coffee, watching films that make me feel something, or taking long walks to recharge and reflect. I’m a bit of an old soul — I love handwritten notes, natural light, and the quiet moments most people overlook. I believe that the smallest details often tell the biggest stories. Whether it’s the way a groom looks at his bride during the vows or the tear a parent wipes away during the first dance — those are the moments I live to capture. Photography and filmmaking, for me, are more than a profession; they’re a way of preserving truth, love, and connection in its purest form."
        })]
      })
    })]
  });
};
const about$1 = UNSAFE_withComponentProps(about);
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: about$1
}, Symbol.toStringTag, { value: "Module" }));
const Films = ({ film }) => {
  return /* @__PURE__ */ jsxs("div", { className: "films", children: [
    /* @__PURE__ */ jsx(
      "iframe",
      {
        src: `${film.src}?controls=0&showinfo=0&modestbranding=1&rel=0&autoplay=1&mute=1`,
        title: film.title,
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        referrerPolicy: "strict-origin-when-cross-origin",
        allowFullScreen: true
      }
    ),
    /* @__PURE__ */ jsx("p", { children: film.title })
  ] });
};
const experience = () => {
  return /* @__PURE__ */ jsxs("main", {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "exp-hero",
      children: [/* @__PURE__ */ jsx("div", {
        className: "absolute inset-0 bg-gradient-to-b from-(--text-dark)/90 to-transparent z-0"
      }), /* @__PURE__ */ jsxs("h1", {
        children: ["Experience ", /* @__PURE__ */ jsx("span", {
          children: " with"
        }), " ", /* @__PURE__ */ jsx("br", {}), " CineHaven"]
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "wrapper",
      children: /* @__PURE__ */ jsxs("div", {
        className: "featured-films",
        children: [/* @__PURE__ */ jsx("h2", {
          children: "Featured Films"
        }), /* @__PURE__ */ jsx("ul", {
          children: videoData.map((film) => /* @__PURE__ */ jsx(Films, {
            film
          }))
        })]
      })
    })]
  });
};
const experience$1 = UNSAFE_withComponentProps(experience);
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: experience$1
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-Di2m-Wg4.js", "imports": ["/assets/chunk-QMGIS6GS-BKF99xZU.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-CdJicwpV.js", "imports": ["/assets/chunk-QMGIS6GS-BKF99xZU.js"], "css": ["/assets/root-CGAg9k4r.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-B6bsyUsA.js", "imports": ["/assets/chunk-QMGIS6GS-BKF99xZU.js", "/assets/data-DYKaokcv.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/about-BnHwM0io.js", "imports": ["/assets/chunk-QMGIS6GS-BKF99xZU.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/experience": { "id": "routes/experience", "parentId": "root", "path": "experience", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/experience-Crz4inpb.js", "imports": ["/assets/chunk-QMGIS6GS-BKF99xZU.js", "/assets/data-DYKaokcv.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-108fc2ec.js", "version": "108fc2ec", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/CineHaven/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/experience": {
    id: "routes/experience",
    parentId: "root",
    path: "experience",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
