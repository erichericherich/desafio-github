## COMANDOS ÚTEIS GIT/:

##### **START**

**git init**: cria um repositório local;

**git add (. ou -a ou *)**: coloca code/pasta na *staging area*; <br>(para pastas usar: "pasta"/)

**git commit -m(para add mensagem caso queira) "(mensagem)"**: _commitar_ code/pasta.<br>tira arquivo da *staging area* e coloca no repositório local, como "ativos".

**git status**: retorna status do repositório;



##### **LINK ENTRE LOCAL E REMOTO**

**git remote add {alias: convencionado origin} {link do repositório remoto}**: linka repositório remoto com local;

**git remote -v**: lista repositórios no terminal;



**git push {alias: convencionada *origin*} main ou master**: envia repositório local para servidor remoto;

**git pull {alias: origin} master ou main**: baixa repositório do servidor remoto para o local;

**git clone {url do repositório}**: clona repositório para local;



##### CONFIGS

**git config {--global} user.email < digite email >**: adiciona email autor no repositório;

**git config {--global} user.name < digite name >:** adiciona nome autor no repositório;

*flag:* **--unset**: retira inputs;

**--list**: lista configs;

***comandos gerais de terminal:***

**mkdir** : cria direitório;

**echo**: retorna string no terminal;

**echo "(conteúdo do arquivo)" > "nome do arquivo".extensão-do-arquivo**: cria arquivo com conteúdo codificado/txt;

**ls {bash} ou dir**: lista todos os diretórios/pastas do local atual;

**mv /{local atual}/"local destino"**: mover arquivo/pasta;

**del/rm dir ou rm/rf{bash}**: deleta arquivo/pasta;