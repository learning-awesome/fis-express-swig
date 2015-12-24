/**
 * Created by sky on 15/8/15.
 */

function Pager(option){

    var opt  = option ||{};
    this.isLoading = false;
    this.pageIndex = opt.pageIndex||1;
    this.pageSize = opt.pageSize||20;
    this.defaultBottomHeight= opt.defaultBottomHeight||40;
    this.pagerBottom = document.getElementById(opt.pagerBottomId||'pagerBottom');
    this.pagerLoadedHtml=opt.pagerLoadedHtml||"已全部加载完成";
    this.pagerBottom = document.getElementById(opt.pagerBottomId||'pagerBottom')||{};
    this.pagerBottom.innerHTML= opt.pagerLoadingHtml||'<img src="images/loading.gif" />&nbsp;&nbsp;正在加载';
}



Pager.prototype.isScrollBottom = function(){
    var scrollTop = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop
      || 0;
    var clientHeight = document.documentElement ? document.documentElement.clientHeight : document.documentElement.clientHeight;
    var scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);

    console.log(+new Date() + '>>>scrollTop:' + scrollTop + "  clientHeight:" + clientHeight + " scrollHeight:" + scrollHeight);
    return scrollTop + clientHeight + this.defaultBottomHeight > scrollHeight;
}

Pager.prototype.init = function(loadData){
    var self  = this;
    var loadPageData = function(){
            console.log('>>>>>>load next page');
            self.isLoading = true;
            self.pagerBottom.style.display='';
            loadData(function(isAllLoaded){
                self.isLoading = false;
                if(isAllLoaded){
                    self.pagerBottom.innerHTML= self.pagerLoadedHtml;
                    setTimeout(function(){
                        self.pagerBottom.style.visibility='hidden';
                    },2000)
                    window.removeEventListener('scroll', loadNextPage, false)
                }else{
                    ++self.pageIndex;
                }
            });
    };

    var loadNextPage = function(){
        if(!self.isLoading && self.isScrollBottom()){
            loadPageData();
        }else{
            console.log('当前页正在加载pageIndex:' + self.pageIndex);
        }
    }

    window.addEventListener('scroll', loadNextPage, false);
}
