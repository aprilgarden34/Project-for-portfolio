/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  cssModules: true,

  images: {
    domains: [
      'https://dbscthumb-phinf.pstatic.net/3041_000_1/20140520152328766_44DZAWPEL.jpg/2010060717441223.jpg?type=m4500_4500_fst_n&wm=Y',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMDNfMTAg%2FMDAxNjQzODQ2MTUxMjg3.U-5VSo02bS7CbfWWG9Z588EG00LlF0VgbItAL1wpdikg.a4zxSyTSo-TRAq2FhSAkpOK9Xl-nF9t42ZRoDVfgT-Qg.PNG.lifemoa%2F20220203085314.png&type=a340',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMjdfMjY0%2FMDAxNjQ1OTMwNDY4MTk0.lMnEhgEs7HSSh14_4BwDPnL04SACE6fuqR-Yl4i9a-Mg.D2rgp47wpsnTNrx4gMefz52l99sE4ulJBARUjYUxNg0g.JPEG.pureee27%2Fphoto-1632162644763-80b2c6c372bf.jpg&type=a340',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTVfMiAg%2FMDAxNjQ5OTg0NDk0NDU1.QTLijdH8bY_IHp1nrAJguevIRXpRwvJayxfZaIkjd_8g.0IoWzWX9y09XnwUJkv8pxTRhVyLjtB93UftPVl5Iaikg.JPEG.sky87915%2F20220411_123745.jpg&type=a340',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTNfMjAg%2FMDAxNjQ5ODE1MzY5ODM3.na7nPP9xCD3Jv_qXDFDnjhyJFkWpnQzgdDtDjITcWoYg.NM5OeFJqZnVJdYiSL-d19fi-Zfmp5xUnWZvJvTT6PHEg.JPEG.dulliboll%2FIMG_9306.JPG&type=sc960_832',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MjRfODMg%2FMDAxNjUzMzgzMzY5Nzkw.D7ANuewvS_FSUFegHASMP72ml1M_rNIhD-ci7v9cuwAg.yyHW5FwyoZTuwjS3quo86s1dYkQTCYFSdJ8ybg4UyEgg.JPEG.sgyi0ct2cz-ssche%2Frwrt4.jpg&type=sc960_832',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMzFfMTkw%2FMDAxNjQ4NzM0NTYxMjI5.5b5RQtKd67RK3yyIsNpKO6o4UMJMKqnB_liZzjz_w6Qg.aTHb6CrG-viXSKf8vlOxWPKdreuiNPBd1luISJpw7Jwg.JPEG.lsd9572%2FKakaoTalk_20220325_130028753.jpg&type=sc960_832',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MTVfMjI5%2FMDAxNjUyNjIzNTYwNjg5.STMVtMnl1Gp3DiITMtTlZ3HqYFAsUTj7KsVlMTILJFMg.FScDTLGUrTOCNBbGwGXICiUptgrW-_g0GVhf44YeiuEg.JPEG.leeyaeja%2F1652269978299.jpg&type=a340',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMjlfODYg%2FMDAxNjQ4NTM0ODY3MjQ2.ewEfSyHjRi9gqQXKF6t1161fb9Yk53oLPzB3nhRqolQg.dUfoNZEnhvryaGmL5BgSf6LbMZfx31DoKFHzffn2mRAg.JPEG.hsc099%2FIMG_9915.JPG&type=sc960_832',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MTRfNDMg%2FMDAxNjUyNTMwOTk1MDk1.fWcCe1M6PZMgqFVoFBF14Th_Zln7cJH3WJoyEtUTyV4g.McBTNHF-nJoYDKxEpWAesgR3sRq_FFEfoy3nal3fokkg.JPEG.wer9055%2F20220514%25A3%25DF124108.jpg&type=sc960_832',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MjNfMTU0%2FMDAxNjUzMjY0NjE5Mjc2.vDzDuAWSLd6cL8-9vpVl5whnvTsDr8Ig2B0nv63-0ucg.F4sUyAQTH1fmHCUBL9NoXYgaD_7yT7jDFeADsIU_Qqog.JPEG.az4312%2FDSC_0157.jpg&type=sc960_832',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MTlfMTk3%2FMDAxNjUyOTQwMTU3Nzcx.4Zvxx--EZ6gk2ddoHbrTLpd3uPxsLE2-K7er4U1sC3cg.Q4Dw_qF4T8zV0Czz_pzROQf_Rhukb1X66WN8dlyYZw4g.JPEG.pelicia1022%2F20220517_161844.jpg&type=sc960_832',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA2MDZfMjEg%2FMDAxNjU0NDg3NTU3MjMw.CjiYK0h9wZc-aIYrgZ_BcFI9LfN4WYyqe0Qs1VcZRM0g.CWD-gRVYXZiyGhAjA7e5TP6Kah8_k6Pt71SK1FNk8Hsg.JPEG.quotidien_flower%2FKakaoTalk_20220606_123238970_26.jpg&type=sc960_832',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MjZfMjY2%2FMDAxNjI0NjcxNTU3NjI1.7inCRhwBul0g2vIokHSCqOc8038VSXY2M_tfesGhQLog.GWwr9aQ4GAxUslvX7pp8k93Iu0GdhQ5xjHBtR4FRnSEg.JPEG.ssamiae%2F20210620_150637.jpg&type=sc960_832',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MjRfMjc3%2FMDAxNjUzMzk2NzY3NzQ0.sAEkGP305G8OR3e4ZmyVjHGRdL0d47K0Ic5yoKMvzwUg.0VmQ-E7Zw4G-zxZ_jN23RTODYN_vQUDOzlGC--WLjP0g.JPEG.hanjongsun2%2FKakaoTalk_Photo_2022-05-24-21-30-25_016.jpeg&type=sc960_832',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220511_167%2F1652270781507l4FOu_PNG%2F53406679966363705_727774366.png&type=sc960_832',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTlfMjU3%2FMDAxNjUwMzc3NDY2Njk2.w24rwrPKcYz8LxjMDhJ5BGKoRJ1KbTeIeWOGiwvuKP0g.8sUdejcNDrCvW6GOr6-5SJzNtzcwFKArv114wcnwE0gg.JPEG.whitepup109%2FIMG_8599.JPG&type=sc960_832',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MjFfNjUg%2FMDAxNjUzMTIwNjM4NjA4.bL1bR6yrv7rCDL5Cra6fnBwJqjSf9_eh_IutUIx6gP8g.sWlwPfQrhufFXwsMFHjZeQZUl_rVLefpX1OF6mv1Z1kg.JPEG.anajikr%2F%25C5%25E4%25B3%25A2%25C7%25AE.jpg&type=sc960_832',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220405_151%2F1649121153158jciv1_JPEG%2F50256987983131087_1955137997.jpg&type=sc960_832',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150711_274%2Flsoonsoo58_1436601730840WG5cE_JPEG%2F%25C8%25AD%25B4%25DC39-2_%252857%2529.jpg&type=sc960_832',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MThfMjkz%2FMDAxNjUyODUzMTk2MzU3.DBg9FkFZnZEYFr7WwD8N_7IM8TOL7d_Vsg3SeHKYoNEg.iOEHZv_sL0CJ2Ci_5oxJB-3pA_VnXARzJKwiQpZD2wgg.JPEG.year1105%2F%25BB%25E7%25BA%25BB_-17_wallpaper_para_usar_no_plano_de_fundo_do_celular_ou_posts_do_Instagra.jpg&type=sc960_832',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MjVfMTk1%2FMDAxNjUzNDkwMDE4MzIw.iZ58IwWS5nTU1uch9_iBTAvk0Gj8_yBEVvGWS2KKLqog.x-ZdeK4vU_I6vC1IRV2OvX_EfaS24QZQ6p70WaVWqMkg.JPEG.tmiyoung%2F20220522%25A3%25DF174713.jpg&type=sc960_832',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMTdfMTYz%2FMDAxNjM3MDk3ODI3MzY1.sDJVjzsxpk2ie-lW3UA2Dr-WyxFz4x59yqCz7DPdxuUg.AQvgbu2Nm1aKw_zTAe07SINhCPKTfSSoV0o9rpX-nfsg.JPEG.haegangchun%2FDSC_0024_h.jpg&type=sc960_832',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMjNfMjkw%2FMDAxNjM3NjI1MTEyNzM5.XpeWsCTywJf0yxorg88W_tX81OHWsHH7WsvEsXe95nUg.4vp7lw3LTYIFkichvHpBV-yL1SQ2MBbrn-_WQhCslugg.JPEG.yoo20815%2F20211106_141017.jpg&type=sc960_832',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MjBfOTkg%2FMDAxNjI5NDM2ODAxNjUw.JVHxp5xPB8NOn0vOhaX6ltoPt_RV-EtCwflQLmDqCEUg.xr3e35VOoW-YgG8BdGXdEt419cPiqW_lZgeWFIkRwYIg.JPEG.dailybobsang70%2F20210820%25A3%25DF122327.jpg&type=sc960_832',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMDFfNzEg%2FMDAxNjAxNTEzNzAzNzUz.Ce94E9D0UvXAJJRpl9Fkof1AMMpmbseQSlfT6Co05SYg.ay-wP-pVDLxH-p7XbeWj4Exwb9JpHBPyCfjS_M_It0Ag.JPEG.yoon6274%2F1601513703084.jpg&type=sc960_832',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMjFfMjUx%2FMDAxNjQ3ODQ4NDExNTAx.jqxDcIRYqOVTWZcBJDcbISKXp2r61TkQd90QoPFD8cwg.6hSmhqJWjdulibYRhGjiJsBanKTbEhxaoDfHjLB-bkUg.JPEG.tnsals35%2FScreenshot%25A3%25DF20201027%25A3%25AD191316%25A3%25DFInstagram.jpg&type=sc960_832',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA2MDhfOTYg%2FMDAxNjU0Njk5NTgyMjM1.6A74E-rxXHbpTx3Sv0JJ7SZkioUV2jyh5cIynd528xQg.C8cnElitIvBcJw9hnTqs0MABqOF4LoCRSYdg4C68zdog.JPEG.ajtwlsme%2FKakaoTalk_20220608_215805690_03.jpg&type=sc960_832',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMTBfMjA2%2FMDAxNjAyMjc5NTI2NzAw.xQVgBPNciqFO4RagDRLzf1qTpJeaSnsUhROyUAT28lkg.MGbbs60alolhMk1l24rpIqy7OaPKwznmpxlDNkua4tAg.JPEG.haebang58%2F1602279525974.jpg&type=sc960_832',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA5MjdfNTcg%2FMDAxNjMyNzAxNTA4MTYx.6fmzizeciJFeOa2-GzYDzCUGTiJa9Dvyueb7yrGGpu8g.sviCE2FcnhHXvwofnY0zvKxq1zzVlNm4S92n5hKNrCAg.JPEG.hyunsoo9990%2F1632701509289.jpg&type=sc960_832',
    ],
  },
};

const withSass = require('@zeit/next-sass');
module.exports = withSass;
module.exports = nextConfig;
