#!/bin/bash
#source prepare.sh パターン名でファイルとディレクトリを自動生成する
mkdir $1
#実装する言語
language=("c++" "TypeScript" "Go")
for i in "${language[@]}"
do
    mkdir $1/${i}
    if [ ${i}  == "Go" ]
        then
        #Goについてはgo mod tidyをしておく
        cd $1/${i}
        go mod init github.com/sakana7392/Design_Patterns/tree/main/$1/${i}
        go mod tidy
        cd ../..
    fi
done
# パターンの概要をまとめるREADME
touch $1/README.md
echo "# $1" >$1/README.md
echo "## 概要" >>$1/README.md
echo "## クラス図" >>$1/README.md
echo "## 実装の詳細" >>$1/README.md
echo "## 実装するメリットとデメリット" >>$1/README.md
echo "### メリット" >>$1/README.md
echo "### デメリット" >>$1/README.md
echo "## 実装したコード" >>$1/README.md
for i in "${language[@]}"
do
    echo "* [${i}](https://github.com/sakana7392/Design_Patterns/tree/main/$1/${i})" >>$1/README.md
done