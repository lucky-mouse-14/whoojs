import { spawn } from "child_process"
import chalk from "chalk"
import consola from "consola"

export default async (command, path) => {
  // cmd 表示命令, args 代表参数, 如 rm -rm rm就是命令, -rf 就为参数
  const [cmd, ...args] = command.split(' ')
  consola.info(`run: ${chalk.green(`${cmd} ${args.join(' ')}`)}`)
  return new Promise((resolve, reject) => {
    const app = spawn(cmd, args, {
      cwd: path, // 执行命令的路径,
      stdio: 'inherit', // 输出共享给父进程
      shell: process.platform === 'win32' // mac 不需要开启，window 下 git base 需要开启支持
    })
    const onProcessExit = () => app.kill('SIGHUP')

    // 执行完毕关闭并resolve
    app.on('close', (code) => {
      process.removeListener('exit', onProcessExit)

      if (code === 0) resolve()
      else
        reject(
          new Error(`(Command failed. \n Command: ${command} \n Code: ${code})`)
        )
    })
    process.on('exit', onProcessExit)
  })
}