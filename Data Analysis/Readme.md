# 강의보며 vsc로 따라하다 경고문구 2개가 떴었다.
  - FutureWarning: Downcasting behavior in `replace` is deprecated and will be removed in a future version.
    To retain the old behavior, explicitly call `result.infer_objects(copy=False)`.
    To opt-in to the future behavior, set `pd.set_option('future.no_silent_downcasting', True)`

  - FutureWarning: A value is trying to be set on a copy of a DataFrame or Series through chained assignment using an inplace method.
    The behavior will change in pandas 3.0. This inplace method will never work because the intermediate object on which we are setting values always behaves as a copy.
    For example, when doing 'df[col].method(value, inplace=True)', try using 'df.method({col: value}, inplace=True)' or df[col] = df[col].method(value) instead,
    to perform the operation inplace on the original object.

# Pandas 관련해서 3.0 이상 버전에서부터는 inplace 부분하고 몇가지 옵션이 변경된다는 안내로 파악된다
# 그러면.. 문법이라고 해야되나? 그게 바뀌어서 뜯어 고쳐야되는건가..?
