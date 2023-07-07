import { PACKAGE_NAME, PLATFORM_NAME } from '../utils'
import { TaroPlatformHarmony } from './harmony'

export default class Harmony extends TaroPlatformHarmony {
  platform = PLATFORM_NAME
  globalObject = 'globalThis'
  fileType = {
    templ: '.hml',
    style: '.css',
    config: '.json',
    script: '.ets'
  }

  useETS = true
  useJSON5 = true
  runtimePath: string[] | string = `${PACKAGE_NAME}/dist/runtime`
  taroComponentsPath = `${PACKAGE_NAME}/dist/components-harmony-ets`
}
