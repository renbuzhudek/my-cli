#!/usr/bin/env node

var inquirer = require('inquirer');
var program = require('commander');//一个帮助快速开发Nodejs命令行工具的package
var Promise = require("bluebird");
var fs = Promise.promisifyAll(require('fs-extra'));
var chalk = require('chalk');//终端输出时颜色样式输出工具
var figlet = require('figlet');
var ora = require('ora');
var exec = require('promise-exec');
var shell =require('shelljs');//用于执行shell脚本的包
console.log(
	chalk.green(
		figlet.textSync("NODE CLI")
	)
);
program
  .version(require('../package').version)
  .usage('<command> [options] 快速生成项目') //-h 打印的用户提示

program
  .option('-n, --yourname [yourname]', 'Your name')
  .option('-g, --glad', 'Tell us you are happy')

  program
	.command('revert <name>')
  .description('恢复至上个版本')
  .option('--rules', 'list all module rule names')
  .option('--plugins', 'list all plugin names')
	.alias('rv')
	.action((name,cmd) => {
    //如果传了选项，这样可以取到
    var rules = cmd.rules ? true : false;
    //name取到命令后面的参数
		console.log(`回复啦${name}`)
  })


  // 添加一些有用的信息到help选项
program.on('--help', () => {
  console.log()
  console.log(`  Run ${chalk.cyan(`vue <command> --help`)} for detailed usage of given command.`)
  console.log()
})


//解析参数这一行要放到定义的命令最后面
program.parse(process.argv);

if (program.yourname) {
  console.log(`Hello, ${program.yourname}! ${program.glad ? 'I am very happy to see you!' : ''}`);
}


