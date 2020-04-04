defprotocol TypeDouble do
  @fallback_to_any true
  def type(value)
  def double(value)
end


defimpl TypeDouble, for: Integer do
  def type(_value), do: "Integer"
  def double(value), do: value * 2
end

defimpl TypeDouble, for: BitString do
  def type(_value), do: "string"
  def double(value), do: value <> value
end

defimpl TypeDouble, for: Float do
  def type(_value), do: "Float"
  def double(value), do: value * 2.0
end

defimpl TypeDouble, for: Atom do
  def type(_value), do: "Atom"
  def double(_value), do: {:error, "Cannot double an Atom"}
end

defimpl TypeDouble, for: Any do
  def type(_value), do: {:error, "Type not supported"}
  def double(_value), do: {:error, "Type not support"}
end
