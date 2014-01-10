var expect = chai.expect;
var assert = chai.assert;

describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it("should add values to a set", function(){
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    assert.isTrue(set.contains("Danny Glover"));
    assert.isTrue(set.contains("Susan Sarandon"));
  });

  it("should remove values from a set", function(){
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    assert.isFalse(set.contains('Mel Gibson'));
  });

  it("should handle all types of things", function(){
    set.add(9);
    set.add(makeSet());
    set.add([]);
    set.add({});
    set.add(undefined);
    set.add(null);
    assert.isTrue(set.contains(9));
    assert.isTrue(set.contains(makeSet()));
    assert.isTrue(set.contains([]));
    assert.isTrue(set.contains({}));
  });

});
