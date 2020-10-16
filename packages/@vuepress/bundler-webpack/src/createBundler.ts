import type * as WebpackDevServer from 'webpack-dev-server'
import type { CreateBundlerFunction } from '@vuepress/core'
import { createBuild } from './build'
import { createDev } from './dev'
import type { BundlerWebpackOptions } from './types'

export const createBundler: CreateBundlerFunction<
  BundlerWebpackOptions,
  WebpackDevServer
> = (options) => ({
  dev: createDev(options),
  build: createBuild(options),
})
