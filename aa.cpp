#include <bits/stdc++.h>
using namespace std;
#define F first
#define S second
#define lli long long int
#define pb push_back
#define mp make_pair
#define cases lli testcases;cin>>testcases; while(testcases--)
#define trace(x) cout << '>' << #x << ':' << x << endl;
#define trace2(x,y) cout<< '>' << #x << ':' << x << " | " << #y << ':' << y << endl;
#define V vector<lli>
#define VI vector<lli>::iterator
#define PR pair<lli,lli>
#define VP vector<pair<lli,lli> >
#define VPI vector<pair<lli,lli> >::iterator
#define VV vector< vector < lli > >
#define VVI vector< vector < lli > >::iterator
lli MOD= 1000000007LL;//1e9+7
lli fastpow(lli base, lli exp)
{
    lli res=1;while(exp>0)
    {
        if(exp%2==1)
        res=(res*base)%MOD;
        base=(base*base)%MOD;
        exp/=2;
    }
    return res%MOD;
}

unsigned lli powmod(unsigned lli base,unsigned lli pow)
{
   unsigned lli res=1LL;
   while(pow)
   {     
         if (pow%2!=0)  res=(res*base)%MOD;
         base=(base*base)%MOD;
         pow/=2LL;
   }
   return res;
}
vector<lli> DP(10000001);
lli fun(lli in,map<lli,lli> mymap )
{
    if(DP[in]!=-1)return DP[in];
    vector<lli> EJ;
    lli sta=in,cnt=0;
    lli cur=mymap[sta];
    if(cur==sta){DP[in]=1;return 1;}
    EJ.pb(in);
    cnt=1;
    while(cur!=sta)
    {
        cnt++;
        cur=mymap[cur];
        EJ.pb(cur);
    }
    for(vector<lli>::iterator Eit=EJ.begin();Eit!=EJ.end();Eit++)DP[*Eit]=cnt;
    return cnt;
}
unsigned lli gcd(unsigned lli a,unsigned lli b)
{
     if (a == 0 || b == 0)
       return 0;
    if (a == b)
        return a;
    if (a > b)
        return gcd(a-b, b);
    return gcd(a, b-a);
}
int main()
{
	cases
	{
	    lli i,n,x;
	map<lli,lli> mymap;

	mymap.erase(mymap.begin(),mymap.end());
	DP.erase(DP.begin(),DP.end());
	cin>>n;
	lli AC=0;
	map<lli,lli>::iterator mit;
	for(i=1;i<=n;i++)
	{DP[i]=-1;
	    cin>>x;
	    mymap[i]=x;
	    if(mymap[i]==i)AC++;
	}
	set<lli>::iterator sit;
	set<lli>se;
	se.erase(se.begin(),se.end());
	for(i=1;i<=n;i++)
	{
	    se.insert(fun(i,mymap));
	}
	sit=se.begin();
    unsigned lli ans=(*sit);

    unsigned lli y,xo;
    for (sit=se.begin(); sit!=se.end(); sit++)
    {
        xo=(*sit);y=ans;
        unsigned lli denom=(gcd((*sit), ans));
        unsigned lli neum=(xo%MOD*y%MOD)%MOD;
        ans = ( neum * powmod(denom,MOD-2) )%MOD;
    }
    cout<<ans<<"\n";    
	}
    return 0;
}