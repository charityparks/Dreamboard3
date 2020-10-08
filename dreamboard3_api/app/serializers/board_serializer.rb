class BoardSerializer
  include FastJsonapi::ObjectSerializer
  attributes :entries, :title, :author
  has_many :entries, serializer: EntrySerializer 

  # attribute :entries do |board|
  #   board.entries.map do |ent|
  #     {
  #       item: ent.item
  #     }
  #     end
  #   end
end
