const px2vw = require('postcss-px-to-viewport')
module.exports = {
    pages: {
      index: {
        // page 的入口文件
        entry: 'src/main.js',
        // 模板来源
        template: 'public/index.html',
        // 在 dist/index.html 的输出
        filename: 'index.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: '识货-高性价比商品导购',
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
      discount:
      {
        // page 的入口文件
        entry: 'src/maindiscounts.js',
        // 模板来源
        template: 'public/index.html',
        // 在 dist/index.html 的输出
        filename: 'discount.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: '识货优惠',
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', 'discount']
      },
      discover:
      {
        // page 的入口文件
        entry: 'src/maindiscover.js',
        // 模板来源
        template: 'public/index.html',
        // 在 dist/index.html 的输出
        filename: 'discover.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: '识货优惠',
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', 'discover']
      },
      more:
      {
        // page 的入口文件
        entry: 'src/mainmore.js',
        // 模板来源
        template: 'public/index.html',
        // 在 dist/index.html 的输出
        filename: 'more.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: '识货优惠',
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', 'more']
      },
      outfit:
      {
        // page 的入口文件
        entry: 'src/mainoutfit.js',
        // 模板来源
        template: 'public/index.html',
        // 在 dist/index.html 的输出
        filename: 'outfit.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: '装备',
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', 'outfit']
      }
    },
    devServer: {
      proxy: {
        //请求地址包含这个地址会走这个代理
        '/swiper': {
          //目标地址
          target: 'http://localhost:3333',
          changeOrigin: true
        },

        '/todyList': {
          //目标地址
          target: 'http://m.shihuo.cn/find/mobileList',
          changeOrigin: true
        },
        '/hits' : {
          target: 'http://m.shihuo.cn/youhui/list',
          changeOrigin: true
        },
        '/datalist': {
          //目标地址
          target: 'http://localhost:3333',
          changeOrigin: true
        },
        '/itemlist': {
          //目标地址
          target: 'http://localhost:3333',
          changeOrigin: true
        },
        '/list': {
          //目标地址
          target: 'http://localhost:3333',
          changeOrigin: true
        },
        '/dist': {
          //目标地址
          target: 'http://localhost:3333',
          changeOrigin: true
        },
        '/homefis': {
          //目标地址
          target: 'http://m.shihuo.cn/homefis/getNews',
          changeOrigin: true
        },
        '/zhuangbei': {
          //目标地址
          target: 'http://m.shihuo.cn/zhuangbei/getHomeNews',
          changeOrigin: true
        },

        '/sports': {
          //目标地址
          target: 'http://m.shihuo.cn/sports/getComment',
          changeOrigin: true
        }
      }
    },
    css: {
      loaderOptions: {     
        postcss: {
            plugins:[new px2vw({
                unitToConvert: 'px',
                viewportWidth: 375,
                unitPrecision: 5,
                propList: ['*'],
                viewportUnit: 'vw',
                fontViewportUnit: 'vw',
                selectorBlackList: [],
                minPixelValue: 1,
                mediaQuery: false,
                replace: true,
                exclude: /node_modules/,
                include: undefined,
                landscape: false,
                landscapeUnit: 'vw',
                landscapeWidth: 568 
            })]
          // 这里的选项会传递给 postcss-loader
        }
      }
    }
  }