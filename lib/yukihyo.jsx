import "mizuki/utility.jsx";

class Yukihyo
{

    var pointPerRank = {} : Map.<int[]>;
    var pointPerTip : int;
    
    var rank : int;
    var startPoint : int;
    var endPoint : int;
    var tip : int;

    function constructor(oka: int[], uma: int[], perTip: int, badai: int[])
    {
        var _oka = oka[1] - oka[0];
        this.pointPerRank['oka'] = ArrayUtil.<int>.make(uma.length, (i) ->
          _oka * (i == 0 ? uma.length - 1 : -1)
        );

        this.pointPerRank['uma'] = uma;
        this.pointPerRank['badai'] = badai;

        this.pointPerTip = perTip;
        this.startPoint = oka[0];
        this.endPoint = oka[0];
        this.tip = 0;
    }

    function addTips(amount: int) : void
    {
        this.tip += amount;
    }

    function finish(point: int, rank: int) : void
    {
        this.endPoint = point;
        this.rank = rank;
    }

    function result() : int
    {
        return (this.endPoint - this.startPoint)
            + this.pointPerRank.keys().reduce.<int>(
              (r, k) -> r + this.pointPerRank[k][this.rank - 1], 0)
            + this.pointPerTip * this.tip;
    }
}
