
/* 記事用テンプレートコード

with (document) {
    write('<h3>' + '記事タイトル' + '</h3>');
    write('<h6>' + 'xxxx年aa月bb日' + '</h6>' + '<br>');
    write(
        '',
        '',
    );
}

*/

with (document) {
    write('<h3>' + '明けましておめでとうございます。' + '</h3>');
    write('<h6>' + '2021年01月04日' + '</h6>' + '<br>');
    write(
        '<p>こんにちは。投稿ができてなかった@Yutolab1120です。(普通にごめんなさい...)</p>',
        '<p>気がついたら年が2021年になってましたね...確か、<b>丑年</b>ですよね。</p>',
        '<p>今年も作りたいモノ、沢山あります。ちょっとメモしておきたいと思います。</p>' + '<br>',
        '<h5><b>作りたいアプリ,サービス</b></h5>',
        '<p><b>・インスタントなチャットサイト</b></p>',
        '<p><b>・写真を投稿できるアプリ</b></p>',
        '<p><b>・クエスト投稿サイト(お題箱みたいなもの)</b></p>',
        '<p><b>・天気予報とかニュースとかがパッとわかるWebページ</b></p>',
        '<p><b>・iOSのtodoアプリ</b></p>',
        '<p><b>・iOSのタイマーアプリ(ちょっと高機能な)</b></p>' + '<br>',
        '<h5><b>最後に</b></h5>',
        '<p>これで以上ですけど、多分また投稿を休むかもしれません。</p>',
        '<p>なので、そこのところはご了承ください。さよならー！</p>' + '<br>'
    );
}

with (document) {
    write('<h3>' + '日付を自動化したい話' + '</h3>');
    write('<h6>' + '2020年12月17日' + '</h6>' + '<br>');
    write(
        '<p>こんにちは！家に帰ってきて眠すぎてヤバかった@Yutolab1120です。</p>',
        '<p>今日は、とりあえず何か自動化したいなと思いまして。この記事を書いてみていますw</p>' + '<br>',
        '<h5><b>日付の自動化</b></h5>',
        '<p>このブログでまず一番簡単に自動化したいのが<b>「日付」</b>です！</p>',
        '<p>正直ね...いちいちxxxx年aa月bb日って書き換えるのめんどくさいんですよね...</p>',
        '<p>なので。できればこれもJavaScriptでどうにかしたいなと思いました。</p>' + '<br>',
        '<h5><b>じゃあどうやって実装するか？</b></h5>',
        '<p>JavaScriptでの日付追加...これは、まあ<b>new Date()</b>で行けるかな...</p>',
        '<p>var dt = new Date();みたいにして...</p>',
        '<p>var year = dt.getFullYear();のように抽出してくっ付ければいけば実装完了ですねw(意外と簡単...)</p>',
        '<p>こんな感じでした！次の記事では何を実装しようかな...</p>',
        '<p>結構記事書くのも慣れてきたので、これからも頑張っていきたいと思います。</p>',
        '<p>それじゃあ。また明日！</p>' + '<br>'  
    );
}

with (document) {
    write('<h3>' + 'とりあえずGitHubPagesでホスティングしたー' + '</h3>');
    write('<h6>' + '2020年12月16日' + '</h6>' + '<br>');
    write(
        '<p>ども( ・∇・)。Yutolab1120です！とりあえずGitHubのコード編集で記事書いてますw</p>',
        '<p>なんかねーwもう少ししっかりバック側作った方がいいね...(記事投稿フォーム的なやつ欲しいw)</p>',
        '<p>結局VS Codeとかで書いたやつcommitしたほうが効率いいかもしれんな...</p>',
        '<p>まあ、この記事書いてる時間帯がPM11:18ということでちょっとネムネム...</p>',
        '<p>でも、いつもこんな感じなんだよなーradiko聴きながらコード書くのが最近の日課。</p>',
        '<p>というか、最近忙しすぎて自分の余裕がなくて辛い。これは本当に。もう少し余裕のある生活がしたいです...(切実)</p>',
        '<p>こんなこと書いても意味ないなw</p>' + '<br>',
        '<h5><b>今後の予定</b></h5>',
        '<p>今後は、まず記事をもう少し簡単に投稿できる工夫（？）をしたいですねw</p>',
        '<p>あと、ホスティングサービスも変えたいなと思っています。</p>',
        '<p>予定ではNetlifyとかかな...まあ、その時の気分で考えますw今日はここまでで！また明日！</p>' + '<br>'
    );
} 

with (document) {
    write ('<h3>' + 'Hello,World!' + '</h3>');
    write ('<h6>' + '2020年12月15日' + '</h6>' + '<br>');
    write (
        '<p>こんにちは。ブログ投稿、運営をはじめました！ユウトです！</p>',
        '<p>このブログはCMSを使用しない非常に更新が大変なブログになります...</p>',
        '<p>まあ、<b>「ある意味」</b>ロマンがあって良いのではないかなと思いますw&nbsp;いつまで続けられるかな....</p>',
        '<p>頑張って更新していきたいと思います！</p>' + '<br>',
        '<h5><b>サブ見出しはh5タグで書こうかな...</b></h5>',
        '<p>それとも、CSSで自作のタグを作ろうかな...</p>',
        '<p>正直ね ？ CMSを使わないってことはカスタマイズが最高にしやすい訳です。</p>',
        '<p>実はこの記事（？）はローカル環境のVS Codeで書いてますw&nbsp;いやー本当に、、、ホスティングはどこにしようかなー</p>',
        '<p>そんな感じですが、まあよろしくお願いしますー！</p>'
    );
}
