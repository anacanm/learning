defmodule SendSelf do
  def sendMes() do
    send self(), {:hello, "world"}
  end

  def rec() do
    receive do
      {:hello, msg} -> msg
    after
      1000 -> "Inbox is empty :("
    end
  end


end
