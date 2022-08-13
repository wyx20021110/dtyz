class dtyz{
    constructor(id)
    {
        this.id = id;
        this.$index = $('#'+id);
        this.nav = new dtyznav(this);
        this.slideimg = new slideimg(this);
        this.news = new dtyznews(this);
        this.footer = dtyzfooter(this);
    }
}

class dtyznav{
    constructor(root)
    {
        this.root = root;
        this.$nav = $(`<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">首页</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
              </svg>学校概况</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16">
                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/>
                <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/>
              </svg>新闻中心</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
              </svg>招生升学</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
              </svg>师资队伍</a>
              </li>
               <li class="nav-item" href="#">
                <a class="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bank" viewBox="0 0 16 16">
                <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z"/>
              </svg>党团工会</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  更多
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">校长信箱</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
             
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>`)
      this.root.$index.append(this.$nav);
    }
}



class slideimg{
  constructor(root){
    this.root = root;
    this.$slideimg = (`<div class="imgslide"><div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../static/images/dtyz.png" class="slideimg d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="../static/images/dtyz2.jpg" class="slideimg d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="../static/images/slide3.png" class="slideimg d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div></div>`)
    this.root.$index.append(this.$slideimg)
  }
}

class dtyznews{
  constructor(root){
    this.root = root;
    this.$content = $(
      `<div class="container" style="margin-top: 10vh;">
      <div class="row">
          <div class="news col-sm-12 col-lg-6">
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div class="carousel-inner">
                      <div class="carousel-item active">
                      <a href="https://mp.weixin.qq.com/s/aL1GvLA0buCl70z4RSCCPw"><img src="../static/images/news1.jpg" class="newsimg d-block w-100" alt="...">
                      <div class="carousel-caption d-none d-md-block">
                      <p>家校共育 扬帆启航——2022级高一新生家校共建会</p></div>
                      </a>
                      
                  </div>
                    <div class="carousel-item">
                      <a href="https://mp.weixin.qq.com/s/l_MhVOEJbTs9MCct2tWKEg"><img src="../static/images/news2.png" class="newsimg d-block w-100" alt="...">
                      <div class="carousel-caption d-none d-md-block">
                        <p>月明船笛参差起，风定池莲自在香——当涂一中2023届高三进入奋战状态</p></div></a>
                      
                      
                    </div>
                    <div class="carousel-item">
                      <a href="https://mp.weixin.qq.com/s/PVg0eky_FyJHs_6iHgokJQ"> <img src="../static/images/news3.png" class="newsimg d-block w-100" alt="...">
                      <div class="carousel-caption d-none d-md-block">
                        <p>喜迎二十大 奋进新征程——当涂一中召开全体党员大会</p>
                      </div></a>
  
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
          
      </div>
      
      
      <div class="news listbg col-sm-12 col-lg-6">
          <div>
              <h4>学校新闻</h4>
              <ul >
                  <li class="newsli"><a href="https://mp.weixin.qq.com/s/vVbQgcvZ5OM-0tFofeJyIA">致安徽省当涂第一中学2022级新生家长的一封信</a></li>
                  <li class="newsli"><a href="https://mp.weixin.qq.com/s/xK_nmGL4uHJgKdLQOjKUiw">安徽省当涂第一中学2022级“创新实验班”招生实施方案</a></li>
                  <li class="newsli"><a href="https://mp.weixin.qq.com/s/Elhgq8JCSn7kzBVmZ9mikQ">县委书记阙方俊到当涂一中考点检查高考准备工作</a></li>
                  <li class="newsli"><a href="https://mp.weixin.qq.com/s/jyXLFnoXwx1r5N9COtEHvg">当涂一中举办“中国心·端午情”亲子朗诵活动</a></li>
                  <li class="newsli"><a href="https://mp.weixin.qq.com/s/mCUyK2ewTcUA5qAr9eF03Q">铲除“霸王花”，保护校园生态——当涂一中生物科学兴趣小组实践活动</a></li>
                  <li class="newsli"><a href="https://mp.weixin.qq.com/s/ZLaXFzK39pfKWd-S2IbB-A">“法制宣传进校园 普法教育促成长”——当涂一中携手县公安局开展普法安全教育讲座</a></li>
                  <li class="newsli"><a href="https://mp.weixin.qq.com/s/N4UOS1mrwAa-J8gNkZaJnA">逐梦路上的阶梯——记当涂一中教师陶爱华</a></li>
                  <li class="newsli"><a href="https://mp.weixin.qq.com/s/siCQIiIiwjAvNE01h8TmSQ">中国科技大学喜报（致当涂一中）</a></li>
              
              </ul>
  
          </div>
  
  
      </div>
  `
    )
    this.root.$index.append(this.$content);
  }
}