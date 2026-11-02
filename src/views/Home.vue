<template>
  <div class="home">
    <div>
      <div class="sections">
        <div
          v-for="(section, index) in Object.keys(entries)"
          :key="index"
          class="group"
        >
          <div
            class="section"
            v-for="entry in entries[section]"
            :key="entry.id"
          >
            <a v-bind:href="[entry.link]" target="_blank">
              <div class="entry">
                <!-- Add to entry for "blog functionality" 
                @click="$router.push({ name: entry.id })" -->
                <!-- <div class="index t-title">{{ entry.index }}</div> -->
                <span class="entry-arrow-mask">
                  <svg
                    class="entry-arrow"
                    viewBox="0 0 67 23"
                    preserveAspectRatio="none"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M56.4262 11.005L59.7401 11.005L66.3681 11.005L66.3681 13.2143L63.0541 13.2143L63.0541 14.319L59.7401 14.319L59.7401 15.4236L56.4262 15.4236L56.4262 16.5283L53.1122 16.5283L53.1122 17.6329L49.7983 17.6329L49.7983 18.7376L46.4843 18.7376L46.4843 19.8422L43.1704 19.8422L43.1704 20.9469L39.8564 20.9469L39.8564 22.0515L33.2285 22.0515L33.2285 18.7376L36.5425 18.7376L36.5425 17.6329L39.8564 17.6329L39.8564 16.5283L43.1704 16.5283L43.1704 15.4236L46.4843 15.4236L46.4843 14.319L49.7983 14.319L49.7983 13.2143L53.1122 13.2143L53.1122 12.1097L56.4262 12.1097L56.4262 11.005Z"
                      fill="#1e1a1a"
                    />
                    <path
                      d="M56.4262 11.0465L59.7401 11.0465L66.3681 11.0465L66.3681 8.83721L63.0541 8.83721L63.0541 7.73256L59.7401 7.73256L59.7401 6.62791L56.4262 6.62791L56.4262 5.52326L53.1122 5.52326L53.1122 4.4186L49.7983 4.4186L49.7983 3.31395L46.4843 3.31395L46.4843 2.2093L43.1704 2.2093L43.1704 1.10465L39.8564 1.10465L39.8564 -2.89715e-07L33.2285 0L33.2285 3.31395L36.5425 3.31395L36.5425 4.41861L39.8564 4.41861L39.8564 5.52326L43.1704 5.52326L43.1704 6.62791L46.4843 6.62791L46.4843 7.73256L49.7983 7.73256L49.7983 8.83721L53.1122 8.83721L53.1122 9.94186L56.4262 9.94186L56.4262 11.0465Z"
                      fill="#1e1a1a"
                    />
                    <rect
                      y="13"
                      width="4"
                      height="59"
                      transform="rotate(-90 0 13)"
                      fill="#1e1a1a"
                    />
                  </svg>
                </span>
                <div class="entry-info">
                  <div class="title t-title t-uppercase">
                    {{ entry.title }}
                  </div>
                </div>
                <div class="author t-text ">
                  {{ entry.author }}
                </div>
                <div class="excerpt t-text">
                  {{ entry.excerpt }}
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="marquee">
      <div class="marquee-text t-text">
        "Counter Situations" uses Xanh Mono by
        <a href="https://github.com/yellow-type-foundry" target="_blank"
          >Yellow Type Foundry</a
        >
        & Feeeels Fuzzy by
        <a href="https://jckfa.com/" target="_blank">Jack Fahnestock</a>. This
        site was developed using a vue blog using markdown by Joseph Harvey
        Angeles.
      </div>
    </div>
  </div>
</template>

<script>
import BLOGENTRIES from "@/statics/data/blogs.json";

export default {
  name: "home",
  computed: {
    entries() {
      return BLOGENTRIES;
    },
  },

  methods: {
    colophonSelected(state) {
      if (state === "open") {
        if (this.colophonSwitch === false) {
          this.colophonSwitch = true;
        }
      } else if (state === "close") {
        this.colophonSwitch = false;
      }
    },
  },

  data() {
    return {
      colophonSwitch: false,
    };
  },
};
</script>

<style lang="scss" scoped>
::selection {
  background: #e6ff4d;
  color: #1e1a1a;
}

.about {
  box-sizing: border-box;
  padding: 0.25rem 1rem;
  background: #dfbfff;
  display: flex;
  align-items: flex-end;
}

.home {
  width: 50%;
  box-sizing: border-box;
  float: right;
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 1.9rem;
}

.sections {
  margin-top: 0;
}

.section {
  width: 100%;
}

.group {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
}

.entry {
  --entry-dash-length: 6px;
  --entry-dash-gap: 3px;
  --entry-border-width: 0.5px;
  --entry-border-color: #1e1a1a;

  position: relative;
  display: flex;
  padding: 0.5rem 1rem 0.5rem 1rem;
  flex-direction: row;
  justify-content: space-between;
  gap: 1em;
  transition: all 0.1s cubic-bezier(0.85, 0, 0.15, 1);
  border-bottom: none;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: var(--entry-border-width);
    background: repeating-linear-gradient(
      90deg,
      var(--entry-border-color) 0,
      var(--entry-border-color) var(--entry-dash-length),
      transparent var(--entry-dash-length),
      transparent calc(var(--entry-dash-length) + var(--entry-dash-gap))
    );
    pointer-events: none;
  }

  &:hover {
    cursor: pointer;
    background-color: #FFF5D8;
  }

  &:hover > .entry-info {
    // padding-left: 6rem;
  }
}

.entry-info {
  display: flex;
  flex-direction: column;
  transition: all 0.8s cubic-bezier(0.85, 0, 0.15, 1);
}

.title {
  box-sizing: border-box;
  max-width: 18rem;
  min-width: 18rem;
  padding-left: 0;
  transition: padding-left 0.8s cubic-bezier(0.85, 0, 0.15, 1);
}

.entry-arrow-mask {
  position: absolute;
  left: 1rem;
  top: 0;
  width: 3.5rem;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.entry-arrow {
  display: block;
  width: 100%;
  height: 100%;
  transform: translateX(-100%);
  transition: transform 0.8s cubic-bezier(0.85, 0, 0.15, 1);
}

.entry:hover .title {
  padding-left: 4rem;
}

.entry:hover .entry-arrow {
  transform: translateX(0);
}

.author {
  min-width: 10rem;
  max-width: 10rem;
}

.excerpt {
  position: relative;
  z-index: 1;
  align-self: flex-start;
  box-sizing: border-box;
  max-width: 14rem;
  padding: 0.4rem 0.5rem;
  background-color: #ffffff;
  transform: rotate(10deg);
  background-image:
    repeating-linear-gradient(
      90deg,
      var(--entry-border-color) 0,
      var(--entry-border-color) var(--entry-dash-length),
      transparent var(--entry-dash-length),
      transparent calc(var(--entry-dash-length) + var(--entry-dash-gap))
    ),
    repeating-linear-gradient(
      90deg,
      var(--entry-border-color) 0,
      var(--entry-border-color) var(--entry-dash-length),
      transparent var(--entry-dash-length),
      transparent calc(var(--entry-dash-length) + var(--entry-dash-gap))
    ),
    repeating-linear-gradient(
      0deg,
      var(--entry-border-color) 0,
      var(--entry-border-color) var(--entry-dash-length),
      transparent var(--entry-dash-length),
      transparent calc(var(--entry-dash-length) + var(--entry-dash-gap))
    ),
    repeating-linear-gradient(
      0deg,
      var(--entry-border-color) 0,
      var(--entry-border-color) var(--entry-dash-length),
      transparent var(--entry-dash-length),
      transparent calc(var(--entry-dash-length) + var(--entry-dash-gap))
    );
  background-size:
    100% var(--entry-border-width),
    100% var(--entry-border-width),
    var(--entry-border-width) 100%,
    var(--entry-border-width) 100%;
  background-position: top, bottom, left, right;
  background-repeat: no-repeat;
}

// marquee

@keyframes marquee-text {
  0% {
    margin-left: 50%;
    transform: translateX(0%);
  }
  100% {
    margin-left: 0;
    transform: translateX(-100%);
  }
}

.marquee {
  background: #D8D8D8;
  overflow: hidden;
  position: fixed;
  z-index: 2;
  bottom: 0rem;
  height: auto;
}

.marquee-text {
  animation: marquee-text 30s linear infinite;
  display: inline-block;
  white-space: nowrap;
  width: fit-content;
  padding: 0;
}

.marquee-text:hover {
  animation-play-state: paused;
}

@media only screen and (max-width: 800px) {
  .home {
    width: 100%;
    min-height: 100vh;
    position: relative;
    margin-top: calc(100vh);
    justify-content: flex-start;
    padding-bottom: 0;
  }

  .about {
    align-items: flex-start;
  }

  .entry {
    flex-direction: column;
    justify-content: flex-start;
    gap: 0;
  }

  .title {
    max-width: 70%;
    min-width: 70%;
    padding-bottom: 0.25rem;
  }

  .author {
    min-width: 70%;
    max-width: 70%;
    padding-bottom: 1rem;
  }

  .excerpt {
    max-width: 70%;
  }

  .author,
  .excerpt {
    transition: padding-left 0.8s cubic-bezier(0.85, 0, 0.15, 1);
  }

  .entry:hover .author,
  .entry:hover .excerpt {
    padding-left: 4rem;
  }

  .marquee {
    position: relative;
  }

  @keyframes marquee-text {
    0% {
      margin-left: 100%;
      transform: translateX(0%);
    }
    100% {
      margin-left: 0;
      transform: translateX(-100%);
    }
  }
}
</style>
