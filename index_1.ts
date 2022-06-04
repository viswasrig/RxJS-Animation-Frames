import { animationFrames, TimestampProvider } from 'rxjs';

// A custom timestamp provider
let now = 0;
const customTSProvider: TimestampProvider = {
  now() {
    return now++;
  },
};

const source$ = animationFrames(customTSProvider);

// Log increasing numbers 0...1...2... on every animation frame.
source$.subscribe(({ elapsed }) => console.log(elapsed));
