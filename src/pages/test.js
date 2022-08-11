import * as React from 'react';
import ListItem from '../components/ListItem';
import * as styles from './test.module.css';


const IMAGE_DATA = {
  "cards": [
    {
      "image": {
        "description": "Black \"The New York Times\" logo",
        "gatsbyImageData": {
          "images": {
            "sources": [
              {
                "srcSet": "https://images.ctfassets.net/6icpdjijyrth/BHhtgYQ7zoSrC8bpZgXvz/c2ae3c882b58ffb257d54d4134044fbb/media-02.png?w=113&h=113&q=50&fm=webp 113w,\nhttps://images.ctfassets.net/6icpdjijyrth/BHhtgYQ7zoSrC8bpZgXvz/c2ae3c882b58ffb257d54d4134044fbb/media-02.png?w=226&h=226&q=50&fm=webp 226w,\nhttps://images.ctfassets.net/6icpdjijyrth/BHhtgYQ7zoSrC8bpZgXvz/c2ae3c882b58ffb257d54d4134044fbb/media-02.png?w=451&h=451&q=50&fm=webp 451w",
                "sizes": "(min-width: 451px) 451px, 100vw",
                "type": "image/webp"
              }
            ],
            "fallback": {
              "src": "https://images.ctfassets.net/6icpdjijyrth/BHhtgYQ7zoSrC8bpZgXvz/c2ae3c882b58ffb257d54d4134044fbb/media-02.png?w=451&h=451&q=50&fm=png",
              "srcSet": "https://images.ctfassets.net/6icpdjijyrth/BHhtgYQ7zoSrC8bpZgXvz/c2ae3c882b58ffb257d54d4134044fbb/media-02.png?w=113&h=113&q=50&fm=png 113w,\nhttps://images.ctfassets.net/6icpdjijyrth/BHhtgYQ7zoSrC8bpZgXvz/c2ae3c882b58ffb257d54d4134044fbb/media-02.png?w=226&h=226&q=50&fm=png 226w,\nhttps://images.ctfassets.net/6icpdjijyrth/BHhtgYQ7zoSrC8bpZgXvz/c2ae3c882b58ffb257d54d4134044fbb/media-02.png?w=451&h=451&q=50&fm=png 451w",
              "sizes": "(min-width: 451px) 451px, 100vw"
            }
          },
          "layout": "constrained",
          "width": 1074,
          "height": 1074
        },
      }
    },
    {
      "image": {
        "description": "Red Time logo ",
        "gatsbyImageData": {
          "images": {
            "sources": [
              {
                "srcSet": "https://images.ctfassets.net/6icpdjijyrth/1pTu1qTwSV7erLCpw40npP/b1e596ceae30ba7fd41388201df1c448/media-03.png?w=113&h=113&q=50&fm=webp 113w,\nhttps://images.ctfassets.net/6icpdjijyrth/1pTu1qTwSV7erLCpw40npP/b1e596ceae30ba7fd41388201df1c448/media-03.png?w=226&h=226&q=50&fm=webp 226w,\nhttps://images.ctfassets.net/6icpdjijyrth/1pTu1qTwSV7erLCpw40npP/b1e596ceae30ba7fd41388201df1c448/media-03.png?w=451&h=451&q=50&fm=webp 451w",
                "sizes": "(min-width: 451px) 451px, 100vw",
                "type": "image/webp"
              }
            ],
            "fallback": {
              "src": "https://images.ctfassets.net/6icpdjijyrth/1pTu1qTwSV7erLCpw40npP/b1e596ceae30ba7fd41388201df1c448/media-03.png?w=451&h=451&q=50&fm=png",
              "srcSet": "https://images.ctfassets.net/6icpdjijyrth/1pTu1qTwSV7erLCpw40npP/b1e596ceae30ba7fd41388201df1c448/media-03.png?w=113&h=113&q=50&fm=png 113w,\nhttps://images.ctfassets.net/6icpdjijyrth/1pTu1qTwSV7erLCpw40npP/b1e596ceae30ba7fd41388201df1c448/media-03.png?w=226&h=226&q=50&fm=png 226w,\nhttps://images.ctfassets.net/6icpdjijyrth/1pTu1qTwSV7erLCpw40npP/b1e596ceae30ba7fd41388201df1c448/media-03.png?w=451&h=451&q=50&fm=png 451w",
              "sizes": "(min-width: 451px) 451px, 100vw"
            }
          },
          "layout": "constrained",
          "width": 1074,
          "height": 1074
        },
      }
    },
    {
      "image": {
        "description": "Blue \"People\" logo",
        "gatsbyImageData": {
          "images": {
            "sources": [
              {
                "srcSet": "https://images.ctfassets.net/6icpdjijyrth/2rjGrejpnOblmeS1M3SBt9/72b82c5c2c77427ba036142bd78672b3/media-06.png?w=113&h=113&q=50&fm=webp 113w,\nhttps://images.ctfassets.net/6icpdjijyrth/2rjGrejpnOblmeS1M3SBt9/72b82c5c2c77427ba036142bd78672b3/media-06.png?w=226&h=226&q=50&fm=webp 226w,\nhttps://images.ctfassets.net/6icpdjijyrth/2rjGrejpnOblmeS1M3SBt9/72b82c5c2c77427ba036142bd78672b3/media-06.png?w=451&h=451&q=50&fm=webp 451w",
                "sizes": "(min-width: 451px) 451px, 100vw",
                "type": "image/webp"
              }
            ],
            "fallback": {
              "src": "https://images.ctfassets.net/6icpdjijyrth/2rjGrejpnOblmeS1M3SBt9/72b82c5c2c77427ba036142bd78672b3/media-06.png?w=451&h=451&q=50&fm=png",
              "srcSet": "https://images.ctfassets.net/6icpdjijyrth/2rjGrejpnOblmeS1M3SBt9/72b82c5c2c77427ba036142bd78672b3/media-06.png?w=113&h=113&q=50&fm=png 113w,\nhttps://images.ctfassets.net/6icpdjijyrth/2rjGrejpnOblmeS1M3SBt9/72b82c5c2c77427ba036142bd78672b3/media-06.png?w=226&h=226&q=50&fm=png 226w,\nhttps://images.ctfassets.net/6icpdjijyrth/2rjGrejpnOblmeS1M3SBt9/72b82c5c2c77427ba036142bd78672b3/media-06.png?w=451&h=451&q=50&fm=png 451w",
              "sizes": "(min-width: 451px) 451px, 100vw"
            }
          },
          "layout": "constrained",
          "width": 1074,
          "height": 1074
        },
      }
    }
  ]
}

export default function TestPage() {
  const [loadedImagesMap, setLoadedImagesMap] = React.useState({ 0: false, 1: false, 2: false });

  return (
    <main>
      <h1>Gatsby Image "onLoad" event testing</h1>
      <pre>
        Images Loaded: <br /><br />
        {JSON.stringify(loadedImagesMap)}
      </pre>
      <ul className={styles.imageListWrapper}>
        {
          IMAGE_DATA.cards.map(
            ({ image }, i) =>
              <ListItem
                image={image}
                onLoad={() => {
                  console.log(`image ${i + 1} was loaded!`);
                  setLoadedImagesMap(obj => {
                    return {
                      ...obj,
                      [i]: true
                    }
                  });
                }}
              />
          )
        }
      </ul>
    </main>
  );
}
